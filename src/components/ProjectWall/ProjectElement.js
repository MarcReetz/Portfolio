import { useTranslation } from "react-i18next";
import styles from "./ProjectElement.module.css";

export default function ProjectElement(props) {
  const { t } = useTranslation();

  let techs;
  if (props.techs) {
    techs = props.techs.map((element) => {
      return <p key={element}>{element}</p>;
    });
  }

  let link = ''
  if(props.link){
    link = props.link
  }else if (props.gitLink) {
    link = props.gitLink
  }

  return (
    <div className={styles.container}>
      {props.link && (<a
        href={props.link}
        className={[styles.link, styles.website, styles.center].join(" ")}
        target="_blank"
        rel="noreferrer"
      >
        <i
          className={[
            styles.symbol,
            "fa-solid fa-arrow-up-right-from-square",
          ].join(" ")}
        ></i>
      </a>)}
      
      {props.gitLink && (
        <a
          href={props.gitLink}
          className={[styles.link, styles.center].join(" ")}
          target="_blank"
          rel="noreferrer"
        >
          <i className={[styles.symbol, "fa-brands fa-github"].join(" ")}></i>
        </a>
      )}
      <div className={styles.title}>
        <h4>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={[styles.link, styles.fullLink].join(" ")}
          >
            {t(props.title)}
          </a>
        </h4>
      </div>
      <p className={styles.text}>{t(props.text)}</p>
      {techs && <div className={styles.tags}>{techs}</div>}
    </div>
  );
}
