import { Canvas } from "./Canvas";
import styles from "./art1.module.css";

export const Art1 = () => (
  <Canvas>
    <div className={styles.wrapper}>
      <div className={styles.box} />
    </div>
  </Canvas>
);
