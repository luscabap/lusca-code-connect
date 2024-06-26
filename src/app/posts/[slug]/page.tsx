import PostDetalhado from "@/components/PostDetalhado";
import logger from "@/logger";
import { Post } from "@/types/Post";
import { remark } from "remark";
import html from "remark-html";
import db from "../../../../prisma/db";
import NotFound from "@/app/not-found";
import { redirect } from "next/navigation";

async function getPostBySlug(slug: string){
  try {
    const post = await db.post.findFirst({
      where: {
        slug
      },
      include: { author: true },
    })
  
    if (!post) throw new Error(`Post com o slug ${slug} não foi encontrado`);
  
    const processedContent = await remark()
      .use(html)
      .process(post.markdown);
    const contentHtml = processedContent.toString();
  
    post.markdown = contentHtml;
    return post;
  } catch (error) {
    logger.error("Falha ao obter o post específico com o slug: ", {
      slug,
      error
    })
  }
  redirect('/not-found');
}

const PagePost = async ({ params }: { params: { slug: string } }) => {
  const slug = await params.slug;
  const post: Post = await getPostBySlug(slug);

  return (
    <PostDetalhado 
      title={post.title}
      author={post.author}
      body={post.body}
      cover={post.cover}
      id={post.id}
      markdown={post.markdown}
      slug={post.slug}
    />
  )
}

export default PagePost;