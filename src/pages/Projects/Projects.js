import { useTranslation } from "react-i18next";
import Title from "../../components/Title/Title";
import ProjectWall from "../../components/ProjectWall/ProjectWall";

export default function Projects () {
  const { t } = useTranslation();


  return (
    <section id="projects">
      <Title title={t("projects")} number="3"/>
      <div>
      <ProjectWall/>
      </div>
    </section>
  )
}