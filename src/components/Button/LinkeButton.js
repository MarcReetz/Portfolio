import styles from "./LinkButton.module.css"

export default function LinkButton (props) {

  return(
    <a target="_blank" rel="noreferrer" href={props.link} className={styles.button}>
      {props.text}
    </a>
  )
}