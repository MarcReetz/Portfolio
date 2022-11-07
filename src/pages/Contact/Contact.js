import React from "react";
import styles from "./Contact.module.css";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className={styles.section}>
      <Title number="4" title={t("contact")} />
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <h4>{t("contact_heading")}</h4>
          <h3>{t("contact_sub_heading")}</h3>
          <p>{t("contact_text")}</p>
          <a href="mailto:m.reetz.softawre.googlemail.com">
            <Button text={t("contact_button")} />
          </a>
        </div>
        <div className={styles.footer}></div>
      </div>
    </section>
  );
}
