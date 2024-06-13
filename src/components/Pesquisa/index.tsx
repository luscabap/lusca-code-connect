import styles from "./pesquisa.module.css";

type PesquisaProps = {
  textoInput: string,
  textoBotao: string
}

export const Pesquisa = ({ textoInput, textoBotao }: PesquisaProps) => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder={textoInput} className={styles.container__input}/>
      <button className={styles.container__botao}>{textoBotao}</button>
    </div>
  )
}