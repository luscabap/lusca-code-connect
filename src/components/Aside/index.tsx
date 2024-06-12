import styles from "./aside.module.css";
import logo from "./logo.png";
import Image from "next/image";

export const Aside = () => {
  return (
    <aside className={styles.container}>
      <Image src={logo} alt="Logo do Code Connect"/>
    </aside>
  )
}