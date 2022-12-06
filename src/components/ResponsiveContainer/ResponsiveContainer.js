import styles from "./ResponsiveContainer.module.css";

export default function ResponsiveContainer({ children }) {
  return (
    <div className={styles.outer}>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
