import styles from "./pesquisa.module.css";

type PesquisaProps = {
  textoInput: string,
  textoBotao: string
}

export const Pesquisa = ({ textoInput, textoBotao }: PesquisaProps) => {
  return (
    <form className={styles.container}>
      <input
        name="q"
        type="text" placeholder={textoInput} 
        className={styles.container__input}
      />
      <button className={styles.container__botao} type="submit">{textoBotao}</button>
    </form>
  )
}