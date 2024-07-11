"use client"

import { forwardRef, useImperativeHandle, useRef } from "react";

import styles from "./modal.module.css";

interface IModalProps {
  children: JSX.Element,
  texto?: string
}

export const Modal = forwardRef(({ children, texto = "Deixe seu comentário sobre o post:" }: IModalProps, ref) => {
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
        <h2 className={styles.subtitulo}>{texto}</h2>
        {children}
      </main>
    </dialog>
  )
})