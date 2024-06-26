import { CardPost } from "@/components/CardPost";
import { Pesquisa } from "@/components/Pesquisa";
import logger from "@/logger";
import { Post } from "@/types/Post";
import styles from "./page.module.css"
import Link from "next/link";
import db from "../../prisma/db";
import { Prisma } from '@prisma/client'

interface IResponseProps {
  data: Post[] | [],
  prev: number | null,
  next: number | null
}

type WhereProps = {
  title?: string
}

async function getAllPosts(page: number, searchTerm: string | undefined): Promise<IResponseProps> {
  try {;
    
    const where: Prisma.PostWhereInput = {};

    if (searchTerm){
      where.title = {
        contains: searchTerm,
        mode: "insensitive"
      }
    }

    const postsPerPage = 6;
    const skip = (page - 1) * postsPerPage;

    const totalItems = await db.post.count({
      where
    });

    const totalPages = Math.ceil(totalItems / postsPerPage);

    const prev = page > 1 ? page - 1 : null;
    const next = page < totalPages ? page + 1 : null;

    const posts = await db.post.findMany({
      take: postsPerPage,
      skip,
      where,
      orderBy: { createdAt: "desc" },
      include: { author: true }
    });
    return { data: posts, prev, next }
  } catch (error) {
    logger.error("Falha ao obter posts", { error });
    return { data: [], prev: null, next: null }
  }
}

type SearchParamsProps = {
  page?: string;
  q?: string
}

interface IHomePageProps{
  searchParams: SearchParamsProps;
}

export default async function Home({ searchParams }: IHomePageProps) {
  const currentPage = Number(searchParams?.page || "1");
  const searchTerm = searchParams?.q;
  const { data: posts, prev, next } = await getAllPosts(currentPage, searchTerm);
  return (
    <main className={styles.container}>
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
        {prev && <Link href={{ pathname: '/', query: { page: prev, q: searchTerm }}} className={styles.linkPagina}>Página anterior</Link>}
        {next && <Link href={{ pathname: '/', query: { page: next, q: searchTerm }}} className={styles.linkPagina}>Próxima página</Link>}
      </div>
    </main>
  );
}
