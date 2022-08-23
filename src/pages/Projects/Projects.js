import { useTranslation } from "react-i18next";
import Title from "../../components/Title/Title";

export default function Projects () {
  const { t } = useTranslation();

  return (
    <Title title={t("projects")} number="3"/>
  )
}