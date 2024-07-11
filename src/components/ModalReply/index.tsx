"use client"

import { postReply } from "@/actions";
import { CommentsProps } from "@/types/CommentsProps";
import { useRef } from "react";
import { Comment } from "../Comment";
import { ArrowFoward } from "../icons/ArrowFoward";
import { Modal } from "../Modal";
import styles from "./modalReply.module.css";

interface IModalReplyProps {
  comment: CommentsProps,
}

type useRefModalProps = {
  openModal: () => void
}

export const ModalReply = ({ comment }: IModalReplyProps) => {
  const modalRef = useRef<useRefModalProps>(null);

  const openModal = () => {
    modalRef.current!.openModal();
  }

  const action = postReply.bind(null, comment);

  return (
    <div className={  styles.container}>
      <Modal ref={modalRef} texto="Digite a sua resposta">
        <form action={action} className={styles.containerForm}>
          <div>
            <Comment comment={comment}/>
          </div>
          <textarea name="text" className={styles.textArea} placeholder="Digite o seu comentário"></textarea>
          <button className={styles.botaoEnviarResposta}>Responder<ArrowFoward/></button>
        </form>
      </Modal>
      <button onClick={openModal} className={comment.parentId === null ? styles.botaoResponder : styles.botaoResponderResposta}>Responder</button>
    </div>
  )
};