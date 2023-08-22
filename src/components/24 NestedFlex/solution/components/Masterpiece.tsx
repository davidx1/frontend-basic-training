//TODO: render a crew member with yellow background
import styles from "./masterpiece.module.css";

export const MasterPiece = () => {
  const { wrapper, d_h, d_c, b_y, b_b, b_r, b_w, f_1, f_2, f_3 } = styles;
  return (
    <div className={wrapper}>
      <div className={d_h}>
        <div className={d_c}>
          <div className={`${b_y} ${f_2}`}></div>
          <div className={`${b_w} ${f_3}`}></div>
          <div className={`${d_h} ${f_2}`}>
            <div className={`${b_w} ${f_2}`}></div>
            <div className={`${b_b} ${f_1}`}></div>
          </div>
        </div>
        <div className={d_c}>
          <div className={`${b_r}`}></div>
          <div className={`${d_h}`}>
            <div className={b_w}></div>
            <div className={d_c}>
              <div className={`${b_w} ${f_1}`}></div>
              <div className={`${b_y} ${f_2}`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
