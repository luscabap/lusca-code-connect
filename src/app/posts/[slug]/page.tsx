import PostDetalhado from "@/components/PostDetalhado";
import logger from "@/logger";
import { Post } from "@/types/Post";

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
  return data[0]
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