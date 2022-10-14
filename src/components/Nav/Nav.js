import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Nav.module.css";
import { useEffect,useState } from "react";

export default function Nav(prop) {
  const { t } = useTranslation();

  const [languageInfoVisible, setLanguageInfoVisible] = useState(true);
  
  const handleScroll = () => {
    const position = window.pageYOffset;
    if(position !== 0){
      setLanguageInfoVisible(false)
    }else{
      setLanguageInfoVisible(true)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={styles.header}>
      {prop.isVisible && (
        <button className={styles.button} onClick={prop.onClick}>
          <i class="fa-solid fa-bars"></i>
        </button>
      )}
      {languageInfoVisible && <div className={styles.languageInfo}>
        <p>{t("languageInfo")}</p>
        <i class="fa-solid fa-turn-up"></i>
      </div>}
    </header>
  );
}
