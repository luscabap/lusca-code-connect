import { CommentList } from "@/components/CommentList";
import PostDetalhado from "@/components/PostDetalhado";
import logger from "@/logger";
import { Post } from "@/types/Post";
import { redirect } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";
import db from "../../../../prisma/db";
import styles from "./pagePost.module.css";

async function getPostBySlug(slug: string) {
  try {
    const post = await db.post.findFirst({
      where: {
        slug,
      },
      include: { 
        author: true,
        comments: {
          include: {
            author: true,
            children: {
              include: {
                author: true
              }
            }
          },
          where: {
            parentId: null
          }
        }
      },
    });

    if (!post) throw new Error(`Post com o slug ${slug} não foi encontrado`);

    const processedContent = await remark().use(html).process(post.markdown);
    const contentHtml = processedContent.toString();

    post.markdown = contentHtml;
    return post;
  } catch (error) {
    logger.error("Falha ao obter o post específico com o slug: ", {
      slug,
      error,
    });
  }
  redirect("/not-found");
}

const PagePost = async ({ params }: { params: { slug: string } }) => {
  const slug = await params.slug;
  const post: Post = await getPostBySlug(slug);
  
  return (
    <>
        <PostDetalhado
          title={post.title}
          author={post.author}
          body={post.body}
          cover={post.cover}
          id={post.id}
          markdown={post.markdown}
          slug={post.slug}
          likes={post.likes}
          comments={post.comments}
          authorId={post.authorId}
          createdAt={post.createdAt}
          updatedAt={post.updatedAt}
        />
        <div className={styles.containerComentarios}>
          <h2 className={styles.tituloComentario}>Comentários</h2>
          <CommentList comments={post.comments}/>
        </div>
    </>
  );
};

export default PagePost;
