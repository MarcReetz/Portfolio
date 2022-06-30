import styles from "./Picture.module.css"

export default function Picture (props) {
  return (
    <div className={styles.frame}>
      <img src={props.src} className={styles.picture} alt={props.alt}/>
    </div>
  )
}