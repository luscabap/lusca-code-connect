import { CommentsProps } from "@/types/CommentsProps";
import { useState } from "react";
import { Comment } from "../Comment";
import { ModalReply } from "../ModalReply";
import styles from "./replies.module.css";

interface IReplies {
  comment: CommentsProps;
}

export const Replies = ({ comment }: IReplies) => {
  const [showReplies, setShowReplies] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.containerResposta} onClick={() => setShowReplies(!showReplies)}>
        <div className={styles.tracado}>

        </div>
        <button className={styles.botaoRespostas}>
          {showReplies ? "Ocultar" : "Ver"} respostas
        </button>
      </div>
      {showReplies && (
        <ul className={styles.containerLista}>
          {comment.children!.map((reply) => (
            <li key={reply.id} className={styles.itemLista}>
              <Comment comment={reply} />
              <ModalReply comment={reply} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
