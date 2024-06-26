"use client"

import Link from "next/link";
import styles from "@/app/error/error.module.css";

import { useEffect } from 'react'
import Image from "next/image";
import imagem500 from "@/app/error/500.png";
import { ArrowBack } from "@/components/icons/ArrowBack";
 
export default function Error({ error }: {error: Error & { digest?: string }}){
  useEffect(() => {
    console.error(error)
  }, [error])
  
  return (
    <div className={styles.container}>
      <Image src={imagem500} alt="Imagem de um robô indicando erro genérico" width={656} height={367}/>
      <h2 className={styles.subtitulo}>OPA! Um erro ocorreu.</h2>
      <p className={styles.descricao}>Não conseguimos carreagar a página, volte para seguir navegando.</p>
      <Link href={"/"} className={styles.botaoVoltar}>Voltar ao feed <ArrowBack /></Link>
    </div>
  )
}