import React from "react";
import styles from "./Skills.module.css";
import Title from "../../components/Title/Title";
import { useTranslation } from "react-i18next";
import SkillArea from "../../components/SkillArea/SkillAreaGraph";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills">
      <Title number="2" title={t("skills")} />
      <div className={styles.container}>
        <p>{t("skills_text")}</p>
        <SkillArea/>
      </div>
    </section>
  );
}
