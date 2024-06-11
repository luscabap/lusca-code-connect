import styles from "./aside.module.css"

export const Aside = () => {
  return (
    <aside className={styles.container}>
      <img src="/logo.png" alt="Logo da Code Connect" />
    </aside>
  )
}