import styles from "./SocialmediaIcon.module.css"

export default function SocialmediaIcon (props){
  return (
    <a href={props.link}>
      <img src={props.src} alt={props.alt} className={styles.icon}/>
    </a>
  )
}