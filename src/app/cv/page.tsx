import styles from "./cv.module.css";

export default function CV() {
  return (
    <main className={styles.cv}>
      <iframe className={styles.cv} src="/cv.pdf"></iframe>
    </main>
  );
}
