import React from "react";
import style from "./About.module.css"
import Title from "../../components/Title/Title"
import Picture from "../../components/Picture/Picture"
import { useTranslation } from "react-i18next";
import ResponsiveContainer from "../../components/ResponsiveContainer/ResponsiveContainer";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about">
      <Title number="1" title={t("about_me")}/>
      <ResponsiveContainer>
      <div className={style.container}>
        <div>
          <p>
            {t("about_me_text")}
          </p>
        </div>
        <Picture src="pictures/me.jpeg" alt="Marc Reetz"/>
      </div>
      </ResponsiveContainer>
    </section>
  )
} 