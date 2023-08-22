import { Canvas } from "./Canvas";
import styles from "./art2.module.css";

export const Art2 = () => (
  <Canvas>
    <div className={styles.wrapper}>
      <div className={styles.box1} />
      <div className={styles.box2} />
      <div className={styles.box3} />
    </div>
  </Canvas>
);
