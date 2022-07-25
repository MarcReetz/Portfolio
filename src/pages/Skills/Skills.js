import React from "react";
import styles from "./Skills.module.css";
import Title from "../../components/Title/Title";
import SkillWall from "../../components/SkillWall/SkillWall";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills">
      <Title number="2" title={t("skills")} />
      <div className={styles.container}>
        <p>{t("skills_text")}</p>
        <SkillWall/>
      </div>
    </section>
  );
}
