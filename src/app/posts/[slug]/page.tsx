import PostDetalhado from "@/components/PostDetalhado";
import logger from "@/logger";
import { Post } from "@/types/Post";
import { remark } from "remark";
import html from "remark-html";

async function getPostBySlug(slug: string){
  const url = `http://localhost:3042/posts?slug=${slug}`;
  const response = await fetch(url);
  if(!response.ok){
    logger.error("Ops, algo deu errado");
    return {}
  }
  logger.info("Posts obtidos com sucesso!")
  const data = await response.json();
  if (data.length == 0){
    return <h2>O SLUG NÃO EXISTE</h2>
  }
  const post = data[0];

  const processedContent = await remark()
    .use(html)
    .process(post.markdown);
  const contentHtml = processedContent.toString();

  post.markdown = contentHtml;

  return post;
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