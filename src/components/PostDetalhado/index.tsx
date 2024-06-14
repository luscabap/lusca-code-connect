import { Post } from "@/types/Post";
import Image from "next/image";
import styles from "./postDetalhado.module.css";

const PostDetalhado = ({ cover, title, body, author, markdown }: Post) => {
  return (
    <div className={styles.container}>
      <article>
        <header className={styles.containerImg}>
          <Image src={cover} alt={`Imagem de fundo do post do(a) autor(a) ${author.username}`} width={961} height={300} className={styles.img}/>
        </header>
        <div className={styles.containerInfos}>
          <main className={styles.containerTxt}>
            <h1 className={styles.titulo}>{title}</h1>
            <p className={styles.descricao}>{body}</p>
          </main>
          <footer className={styles.containerAutor}>
            <Image src={author.avatar} alt={`Avatar do(a) autor(a) ${author.name}`} width={32} height={32}/>
            <p className={styles.authorName}>@{author.username}</p>
          </footer>
        </div>
      </article>
      <div className={styles.containerSecundario}>
        <h2 className={styles.tituloSec}>Código:</h2>
        <div className={styles.containerCodigo}>
          <p className={styles.codigo}>{markdown}</p>
        </div>
      </div>
    </div>
  )
}

export default PostDetalhado;