import { useTranslation } from "react-i18next";
import Title from "../../components/Title/Title";
import ProjectWall from "../../components/ProjectWall/ProjectWall";
import styles from "./Projects.module.css"

export default function Projects () {
  const { t } = useTranslation();


  return (
    <section id="projects">
      <Title title={t("projects")} number="3"/>
      <div className={styles.container}>
      <h3>{t("projects_text")}</h3>
      <ProjectWall/>
      </div>
    </section>
  )
}