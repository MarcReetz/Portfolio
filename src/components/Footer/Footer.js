import LinkButton from "../Button/LinkeButton";
import { useTranslation } from "react-i18next";
import styles from './Footer.module.css'

export default function Footer () {
  const { t, i18n } = useTranslation();

  let imprint,privacy

  if(i18n.language === "de"){
    imprint = "../impressum.html"
    privacy = "../datenschutz.html"
  }else{
    imprint = "../imprint.html"
    privacy = "../privacy.html"
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <LinkButton text={t("imprint")} link={imprint} />
        <LinkButton text={t("privacy")} link={privacy}/>
      </div>
      { }
    </footer>
  )
} 