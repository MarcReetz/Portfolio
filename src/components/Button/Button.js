import styles from "./Button.module.css";

export default function Button (props){
  return(
    <button onClick={props.onClick} className={styles.button}>
      {props.text}
    </button>
  )
}