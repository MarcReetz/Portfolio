import { useTranslation } from "react-i18next";
import styles from "./NavMenu.module.css";

export default function NavMenu(prop) {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={prop.onClick}>
        <i className="fa-solid fa-x"></i>
      </button>
      <nav className={styles.navContainer}>
        <ol>
          <li>
            <a href="#about" onClick={prop.onClick}>
              {t("about")}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={prop.onClick}>
              {t("contact")}
            </a>
          </li>
        </ol>
      </nav>
      <div className={styles.links}>
        <a href="https://github.com/MarcReetz/" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
      </div>
    </div>
  );
}
