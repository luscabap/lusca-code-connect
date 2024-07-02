"use client"

import { useRef } from "react";
import { IconButton } from "../IconButton";
import { Modal } from "../Modal";
import { Chat } from "../icons/Chat";
import styles from "./modalComment.module.css";

interface useRefModalComment {
  closeModal: () => void,
  openModal: () => void
}

export const ModalComment = () => {
  const modalRef = useRef<useRefModalComment>(null)
  return (
    <>
      <Modal ref={modalRef}>
        <h1>Olá mundo</h1>
      </Modal>
      <IconButton
        onClick={() => modalRef.current!.openModal()}
      >
        <Chat />
      </IconButton>
    </>
  )
}
