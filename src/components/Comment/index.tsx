import Image from "next/image";
import styles from "./comment.module.css";
import { CommentsProps } from "@/types/CommentsProps";

export const Comment = ({ comment }: { comment: CommentsProps }) => {
  
  return (
    <div className={styles.container}>
      <Image 
        src={comment.author.avatar} 
        alt={`Foto do avatar do autor(a) ${comment.author.name}`}
        width={32}
        height={32}
      />
      <strong>@{comment.author.name}</strong>
      <p>{comment.text}</p>
    </div>
  )
}