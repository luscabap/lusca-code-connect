import Image from "next/image";
import styles from "./comment.module.css";
import { CommentsProps } from "@/types/CommentsProps";
import { useRef } from "react";

export const Comment = ({ comment }: { comment: CommentsProps }) => {
  const modalRef = useRef(null)
  return (
    <>
      <div className={ comment.parentId === null ? styles.container : styles.containerResposta}>
        <Image 
          src={comment.author.avatar} 
          alt={`Foto do avatar do autor(a) ${comment.author.name}`}
          width={32}
          height={32}
        />
        <strong>@{comment.author.name}</strong>
        <p>{comment.text}</p>
      </div>
    </>
  )
}