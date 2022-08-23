import { useTranslation } from "react-i18next"
import styles from "./ProjectElement.module.css"

export default function ProjectElement(props) {
  const {t} = useTranslation();

  return (<div className={styles.container}>
    <h4>{t(props.title)}</h4>
    <p>{t(props.text)}</p>
  </div>)
}