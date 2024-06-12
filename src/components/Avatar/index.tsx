import Image from "next/image";
import styles from "./avatar.module.css";

interface IAvatarProps {
  name: string,
  imageSrc: string
}

export const Avatar = ({ name, imageSrc }: IAvatarProps) => {
  return (
    <ul className={styles.container}>
      <li className={styles.container__itens}>
        <Image src={imageSrc} alt={`Avatar do(a) ${name}}`} width={32} height={32}/>
      </li>
      <li className={`${styles.container__itens} ${styles.item__texto}`}>
        @{name}
      </li>
    </ul>
  )
}