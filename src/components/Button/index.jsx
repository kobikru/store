import styles from "./style.module.css";

export default function Button({ children }) {
  return <button className={styles.btn}>{children}</button>;
}
