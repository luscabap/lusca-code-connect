"use client"

import { forwardRef, useImperativeHandle, useRef } from "react";

import styles from "./modal.module.css";

interface IModalProps {
  children: JSX.Element,
}

export const Modal = forwardRef(({ children }: IModalProps, ref) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  
  const closeModal = () => {
    dialogRef.current!.close()
  }

  const openModal = () => {
    dialogRef.current!.showModal()
  }
  
  useImperativeHandle(ref, () => {
    return {
      closeModal,
      openModal
    }
  })
  

  return (
    <dialog ref={dialogRef} className={styles.container}>
      <header className={styles.containerHeader}>
        <button onClick={closeModal} className={styles.botaoFechar}>X</button>
      </header>
      <main>
        <h2 className={styles.subtitulo}>Deixe seu comentário sobre o post:</h2>
        <input type="text" placeholder="Digite seu comentário" className={styles.input}/>
        {children}
      </main>
      <footer className={styles.containerFooter}>
        <button className={styles.botaoComentar}>Comentar &gt;</button>
      </footer>
    </dialog>
  )
})