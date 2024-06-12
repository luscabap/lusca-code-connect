import Image from "next/image";
import { Avatar } from "../Avatar";
import { AuthorProps } from "@/types/AuthorProps";
import styles from "./cardpost.module.css"

interface ICardPostProps {
  id: number,
  imageCover: string,
  titulo: string,
  slug: string
  descricao: string,
  author: AuthorProps
}

const imageCoverStyle = {
  borderRadius: "8px"
}

export const CardPost = ({ imageCover, titulo, descricao, author}: ICardPostProps) => {
  return (
    <article className={styles.container}>
      <header className={styles.headerCard}>
        <figure className={styles.containerImgCover}>
          <Image src={imageCover} alt={`Capa do posto de titulo: ${titulo}`} fill={true} style={imageCoverStyle}/>
        </figure>
      </header>
      <section className={styles.containerInfos}>
        <main className={styles.containerInfos__txt}>
          <h1 className={styles.containerInfos__titulo}>{titulo}</h1>
          <p className={styles.containerInfos__descricao}>{descricao}</p>
          <p className={styles.containerInfos__detalhes}>Ver detalhes</p>
        </main>
        <footer className={styles.containerAvatar}>
          <Avatar 
            imageSrc={author.avatar}
            name={author.username}
          />
        </footer>
      </section>
    </article>
  )
}