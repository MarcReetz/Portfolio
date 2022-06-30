import style from "./Title.module.css";

export default function Title (props) {
  return (
    <div className={style.line}>
      <div className={style.titleholder}>
        <p>{props.number}</p>
        <h2>{props.title}</h2>
      </div>
    </div>
  )
}