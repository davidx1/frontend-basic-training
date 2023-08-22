import { Canvas } from "./Canvas";
import styles from "./art6.module.css";

export const Art6 = () => (
  <Canvas>
    <div className={styles.wrapper}>
      <div className={styles.box1} />
      <div className={styles.box2} />
    </div>
  </Canvas>
);
