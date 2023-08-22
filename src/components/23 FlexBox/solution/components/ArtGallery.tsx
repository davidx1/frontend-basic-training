import { Art1 } from "./Art1";
import { Art2 } from "./Art2";
import { Art3 } from "./Art3";
import { Art4 } from "./Art4";
import { Art5 } from "./Art5";
import { Art6 } from "./Art6";
import styles from "./artGallery.module.css";

export const ArtGallery = () => (
  <div className={styles.wrapper}>
    <Art1 />
    <Art2 />
    <Art3 />
    <Art4 />
    <Art5 />
    <Art6 />
  </div>
);
