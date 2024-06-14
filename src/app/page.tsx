import { CardPost } from "@/components/CardPost";
import { Pesquisa } from "@/components/Pesquisa";
import logger from "@/logger";
import { Post } from "@/types/Post";
import styles from "./page.module.css"
import Link from "next/link";

interface IResponseProps {
  data: Post[],
  prev: number | null,
  next: number | null
}

type teste = {
  page: string,
  teste: string
}

interface IHomePageProps {
  searchParams: string | undefined | {
    page: string
  }
}

async function getAllPosts(page: number): Promise<IResponseProps> {
  const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`);
  if(!response.ok){
    logger.error("Ops, algo deu errado");
    return { data: [], prev: null, next: null }
  }
  logger.info("Posts obtidos com sucesso!")
  return response.json();
}

export default async function Home({ searchParams }: IHomePageProps) {
  const currentPage = searchParams?.page || 1;
  const { data: posts, prev, next } = await getAllPosts(currentPage);
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
      <div className={styles.containerLinks}>
        {prev && <Link href={`/?page=${prev}`} className={styles.linkPagina}>Página anterior</Link>}
        {next && <Link href={`/?page=${next}`} className={styles.linkPagina}>Próxima página</Link>}
      </div>
    </main>
  );
}
