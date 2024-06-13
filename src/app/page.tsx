import { CardPost } from "@/components/CardPost";
import { Pesquisa } from "@/components/Pesquisa";
import logger from "@/logger";
import { Post } from "@/types/Post";
import styles from "./page.module.css"

async function getAllPosts(): Promise<Post[]> {
  const response = await fetch("http://localhost:3042/posts");
  if(!response.ok){
    logger.error("Ops, algo deu errado");
    return []
  }
  logger.info("Posts obtidos com sucesso!")
  return response.json();
}

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <main className={styles.container}>
      <Pesquisa textoBotao="Buscar" textoInput="Digite o que você procura"/>
      <div className={styles.containerCards}>
        { posts.map(post => <CardPost 
          key={post.id}
          id={post.id}
          imageCover={post.cover}
          titulo={post.title}
          slug={post.slug}
          descricao={post.body}
          author={post.author}
        />) }
      </div>
      
    </main>
  );
}
