"use client"

import { CommentsProps } from "@/types/CommentsProps";
import { useEffect, useState } from "react";
import { Comment } from "../Comment";
import { ModalReply } from "../ModalReply";
import styles from "./replies.module.css";

interface IReplies {
  comment: CommentsProps;
}

export const Replies = ({ comment }: IReplies) => {
  const [showReplies, setShowReplies] = useState(false);
  const [replies, setReplies] = useState<CommentsProps[]>([]);

  async function fetchData() {
    const response = await fetch(`/api/comment/${comment.id}/replies`);
    const data = await response.json();
    setReplies(data);
  }

  useEffect(() => {
    if (showReplies){
      fetchData()
    }
  }, [showReplies])

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
          {replies!.map((reply) => (
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
