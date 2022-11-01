import { useTranslation } from "react-i18next";
import Footer from "../Footer/Footer";
import LangSwitch from "../LangSwitch/LangSwitch";
import styles from "./NavMenu.module.css";

export default function NavMenu(props) {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={props.onClick}>
        <i className="fa-solid fa-x"></i>
      </button>
      <div className={styles.langSwitchContainer}>
        <LangSwitch onClick={props.changeLanguageHandler} />
      </div>
      <nav className={styles.navContainer}>
        <ol>
          <li>
            <a href="#about" onClick={props.onClick}>
              {t("about")}
            </a>
          </li>
          <li>
            <a href="#skils" onClick={props.onClick}>
              {t("skills")}
            </a>
          </li>
          <li>
            <a href="#projects" onClick={props.onClick}>
              {t("projects")}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={props.onClick}>
              {t("contact")}
            </a>
          </li>
        </ol>
      </nav>
      <ul className={styles.links}>
        <li>
          <a
            href="https://github.com/MarcReetz/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.xing.com/profile/Marc_Reetz/cv"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-square-xing"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
