import { useFormStatus } from "react-dom";
import { ArrowFoward } from "../icons/ArrowFoward";
import styles from "./botaoAcao.module.css"
import { Spinner } from "../Spinner";

export const BotaoAcao = ({ texto }: { texto: string }) => {
  const { pending } = useFormStatus();
  return (
    <button className={styles.botaoUsuario} type="submit" aria-disabled={pending}>
      { pending ? <Spinner /> : <> {texto} <ArrowFoward /> </> }
    </button>
  )
}