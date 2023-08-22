import { Canvas } from "./Canvas";
import styles from "./art5.module.css";

export const Art5 = () => (
  <Canvas>
    <div className={styles.wrapper}>
      <div className={styles.box1} />
      <div className={styles.box2} />
      <div className={styles.box3} />
      <div className={styles.box4} />
    </div>
  </Canvas>
);
