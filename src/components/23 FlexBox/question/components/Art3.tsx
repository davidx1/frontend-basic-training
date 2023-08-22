import { Canvas } from "./Canvas";
import styles from "./art3.module.css";

export const Art3 = () => (
  <Canvas>
    <div className={styles.wrapper}>
      <div className={styles.box1} />
      <div className={styles.box2} />
      <div className={styles.box3} />
    </div>
  </Canvas>
);
