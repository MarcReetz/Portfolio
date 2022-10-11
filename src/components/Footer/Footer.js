import LinkButton from "../Button/LinkeButton";
import { useTranslation } from "react-i18next";
import styles from './Footer.module.css'

export default function Footer () {
  const {t} = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <LinkButton text={t("imprint")} link={"/impressum.html"} />
        <LinkButton text={t("privacy")} link={"/datenschutz.html"}/>
      </div>
      { }
    </footer>
  )
} 