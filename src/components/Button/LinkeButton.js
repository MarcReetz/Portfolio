import styles from "./LinkButton.module.css"

export default function LinkButton (props) {

  return(
    <button onClick={props.onClick} className={styles.button}>
      {props.text}
    </button>
  )
}