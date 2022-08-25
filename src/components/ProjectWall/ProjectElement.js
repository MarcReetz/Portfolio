import { useTranslation } from "react-i18next"
import styles from "./ProjectElement.module.css"

export default function ProjectElement(props) {
  const {t} = useTranslation();

  return (<a href={props.link} target="_blank" rel="noreferrer" className={styles.link}> <div className={styles.container}>
    <i className={styles.symbol} class="fa-solid fa-arrow-up-right-from-square"></i>
    <h4>{t(props.title)}</h4>
    <p>{t(props.text)}</p>
  </div></a>)
}