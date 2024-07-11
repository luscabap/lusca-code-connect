"use client"

import { CommentsProps } from "@/types/CommentsProps";
import styles from "./commentList.module.css"
import { Comment } from "../Comment";
import { ModalReply } from "../ModalReply";

interface ICommentList {
  comments: CommentsProps[]
}

export const CommentList = ({ comments }: ICommentList) => {
  
  return (
    <ul className={styles.container}>
      { comments.map(comment => <li className={styles.itemLista} key={comment.id}>
        <Comment comment={comment} key={comment.id} />
        <ModalReply comment={comment}/>
      </li>
      ) }
    </ul>
  )
}