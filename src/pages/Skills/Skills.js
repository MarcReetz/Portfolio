import React from "react";
import styles from "./Skills.module.css"
import Title from "../../components/Title/Title"
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Title number="2" title={t("skills")}/>
    </div>
  )
}