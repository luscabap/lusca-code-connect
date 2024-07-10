import { CommentsProps } from "@/types/CommentsProps";
import styles from "./commentList.module.css"
import { Comment } from "../Comment";

interface ICommentList {
  comments: CommentsProps[]
}

export const CommentList = ({ comments }: ICommentList) => {
  
  return (
    <ul className={styles.container}>
      { comments.map(comment => (
        <li className={styles.itemLista}><Comment comment={comment} key={comment.id} /></li>
      )) }
    </ul>
  )
}