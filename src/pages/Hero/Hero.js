import React from "react";
import style from "./Hero.module.css";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <div className={style.container}>
      <div className={style.inner}>
        <p>{t("my_name_is")}</p>
        <h1>Marc Reetz.</h1>
      </div>
      <div className={style.box}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
