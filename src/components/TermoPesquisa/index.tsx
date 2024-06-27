import styles from "./termoPesquisa.module.css";

interface ITermoPesquisaProps {
  termo: string,
  termoEncontrado: boolean
}

export const TermoPesquisa = ({ termo, termoEncontrado }: ITermoPesquisaProps) => {

  return (
      <div className={styles.containerPesquisa}>{termoEncontrado 
        ? <p className={styles.pesquisa}>Você pesquisou pelo título <strong className={styles.termoPesquisa}>"{termo}"</strong></p>
        : <p className={styles.pesquisa}>Não encontramos a pesquisa <strong className={styles.termoPesquisa}>"{termo}"</strong>. Verifique e tente novamente!</p>
        }
      </div>
  )
}