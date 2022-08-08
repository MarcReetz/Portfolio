import { useTranslation } from "react-i18next";
import styles from "./LangSwitch.module.css"

export default function LangSwitch(props) {
  const { t, i18n } = useTranslation();

  const styleLeft = [styles.borderRight];
  const styleRight = [styles.borderLeft];

  if(i18n.language === 'de'){
    styleRight.push(styles.active)
  }else{
    styleLeft.push(styles.active)
  }

  return (
    <div>
      <p className={styles.header}>{t("language")}</p>
      <div className={styles.container}>
        <button onClick={() => props.onClick('en')} className={styleLeft.join(' ')}>en</button>
        <button onClick={() => props.onClick('de')} className={styleRight.join(' ')}>de</button>
      </div>
    </div>
  );
}
