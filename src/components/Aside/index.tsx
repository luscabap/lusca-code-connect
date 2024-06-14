"use client"
import { useRouter } from "next/navigation";
import styles from "./aside.module.css";
import logo from "./logo.png";
import Image from "next/image";

export const Aside = () => {
  const navigate = useRouter();
  return (
    <aside className={styles.container}>
      <Image src={logo} alt="Logo do Code Connect" width={128} height={40} onClick={() => navigate.push("/")} className={styles.logo}/>
    </aside>
  )
}