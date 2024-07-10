import { Post } from "@/types/Post";
import Image from "next/image";
import styles from "./postDetalhado.module.css";
import { ThumbsUpButton } from "../CardPost/ThumbsUpButton";
import { ModalComment } from "../ModalComment";
import { incrementThumbsUp, postComment } from "@/actions";

const PostDetalhado = ({ cover, title, body, author, markdown, likes, comments, authorId, createdAt, id, slug, updatedAt }: Post) => {
  const post = {
    cover,
    title,
    body,
    author,
    markdown,
    likes,
    comments,
    authorId,
    createdAt,
    id,
    slug,
    updatedAt
  }
  const submitComment = postComment.bind(null, post);
  const submitThumbsUp = incrementThumbsUp.bind(null, post);

  return (
    <div className={styles.container}>
      <article className={styles.containerPost}>
        <header className={styles.containerHeader}>
          <div className={styles.containerImg}>
            <Image src={cover} alt={`Imagem de fundo do post do(a) autor(a) ${author.username}`} fill={true} className={styles.img}/>
          </div>
        </header>
        <div className={styles.containerInfos}>
          <main className={styles.containerTxt}>
            <h1 className={styles.titulo}>{title}</h1>
            <p className={styles.descricao}>{body}</p>
          </main>
          <footer className={styles.containerFooter}>
            <div className={styles.containerAcoes}>
              <form  action={submitThumbsUp} className={styles.containerAcao}>
                <ThumbsUpButton />
                <p className={styles.numExibido}>{likes}</p>
              </form>
              <div className={styles.containerAcao}>
                <ModalComment action={submitComment}/>
                <p className={styles.numExibido}>{comments.length}</p>
              </div>
            </div>
            <div className={styles.containerAutor}>
              <Image src={author.avatar} alt={`Avatar do(a) autor(a) ${author.name}`} width={32} height={32}/>
              <p className={styles.authorName}>@{author.username}</p>
            </div>
          </footer>
        </div>
      </article>
      <div className={styles.containerSecundario}>
        <h2 className={styles.tituloSec}>Código:</h2>
        <div className={styles.containerCodigo}>
          <div dangerouslySetInnerHTML={{ __html: markdown }} className={styles.codigo}/>
        </div>
      </div>
    </div>
  )
}

export default PostDetalhado;