import { incrementThumbsUp } from "@/actions";
import { Post } from "@/types/Post";
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "../Avatar";
import { ThumbsUpButton } from "./ThumbsUpButton";
import styles from "./cardpost.module.css";
import { ModalComment } from "../ModalComment";

interface ICardProps {
  post: Post
}

const imageCoverStyle = {
  borderRadius: "8px"
}

export const CardPost = ({ post }: ICardProps) => {
  const submitThumbsUp = incrementThumbsUp.bind(null, post);

  return (
    <article className={styles.container}>
      <header className={styles.headerCard}>
        <figure className={styles.containerImgCover}>
          <Image src={post.cover} alt={`Capa do posto de titulo: ${post.title}`} fill={true} style={imageCoverStyle}/>
        </figure>
      </header>
      <section className={styles.containerInfos}>
        <main className={styles.containerInfos__txt}>
          <h1 className={styles.containerInfos__titulo}>{post.title}</h1>
          <p className={styles.containerInfos__descricao}>{post.body}</p>
          <Link href={`/posts/${post.slug}`} className={styles.link}>
            Ver detalhes
          </Link>
        </main>
        <footer className={styles.containerFooter}>
          <div>
            <form action={submitThumbsUp} className={styles.containerLikes}>
              <ThumbsUpButton />
              <p className={styles.numLikes}>
                {post.likes}
              </p>
            </form>
            <div>
              <ModalComment />
              <p>{post.comments.length}</p>
            </div>
          </div>
          <Avatar 
            imageSrc={post.author.avatar}
            name={post.author.username}
          />
        </footer>
      </section>
    </article>
    
  )
}