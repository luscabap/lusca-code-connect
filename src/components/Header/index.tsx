import Image from "next/image";
import styles from "./header.module.css";
import logo from "@/assets/logo.png";

export const Header = () => {
  return (
    <header className={styles.container}>
      <a href={"/"} >
        <Image src={logo} alt="Logo do Code Connect" width={128} height={40} />
      </a>
    </header>
  )
}