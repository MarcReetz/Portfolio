import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Nav.module.css"

export default function Nav(prop) {
  const {t} = useTranslation();
  return (
    <header className={styles.header}>
      {prop.isVisible && <button className={styles.button} onClick={prop.onClick}><i class="fa-solid fa-bars"></i></button>}
      <div className={styles.languageInfo}>
        <p>{t("languageInfo")}</p>
        <i class="fa-solid fa-turn-up"></i>
      </div>
    </header>
  )
}
