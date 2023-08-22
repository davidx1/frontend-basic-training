import { PropsWithChildren } from "react";
import styles from "./canvas.module.css";

export const Canvas = ({ children }: PropsWithChildren) => (
  <div className={styles.wrapper}>{children}</div>
);
