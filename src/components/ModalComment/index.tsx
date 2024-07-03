"use client";

import { useRef } from "react";
import { BotaoAcao } from "../BotaoAcao";
import { IconButton } from "../IconButton";
import { Modal } from "../Modal";
import { Chat } from "../icons/Chat";
import styles from "./modalComment.module.css";

interface useRefModalComment {
  closeModal: () => void;
  openModal: () => void;
}

interface IModalCommentProps {
  action: (formData: HTMLFormElement) => Promise<void>
}


export const ModalComment = ({ action }: IModalCommentProps) => {
  const modalRef = useRef<useRefModalComment>(null);
  return (
    <>
      <Modal ref={modalRef}>
        <form action={action} className={styles.containerForm} onSubmit={() => modalRef.current?.closeModal()}>
          <textarea name="text" className={styles.textArea} placeholder="Digite o seu comentário"></textarea>
          <BotaoAcao texto="Comentar"/>
        </form>
      </Modal>
      <IconButton onClick={() => modalRef.current!.openModal()}>
        <Chat />
      </IconButton>
    </>
  );
};
