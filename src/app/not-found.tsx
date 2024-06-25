import Link from 'next/link'
import styles from "./not-found.module.css";
import Image from 'next/image';
import imagemNaoEncontrada from "@/app/error/404.png";

export default async function NotFound() {
  return (
    <div className={styles.container}>
      <Image src={imagemNaoEncontrada} alt="Foto de um robô triste indicando página não encontrada" width={656} height={367}/>
      <h2 className={styles.subtitulo}>OPS! Página não encontrada.</h2>
      <p className={styles.descricao}>Você pode voltar ao feed e continuar buscando projetos incríveis!</p>
      <Link href="/" className={styles.botaoVoltar}>Voltar ao feed</Link>
    </div>
  )
}