import styles from "./Legal.module.css";

export default function Legal(props) {

  const imprint = (<h2>imprint</h2>)
  const privacy = (<h2>privacy</h2>)

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={props.onClick}>
        <i className="fa-solid fa-x"></i>
      </button>
      <div className={styles.control}>
        
      </div>
      {props.legalOn === 1 && imprint}
      {props.legalOn === 2 && privacy}
    </div>
  );
}
