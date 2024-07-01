import React from "react";
import styles from "./iconButton.module.css";

interface IIConButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children: JSX.Element,
}

export const IconButton = ({ children, ...rest }: IIConButtonProps) => {
  return (
    <button {...rest} className={styles.btn}>
      {children}
    </button>
  )
}