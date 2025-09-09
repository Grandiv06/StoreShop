import { BeatLoader } from "react-spinners";
import styles from "./Loader.module.css";
function Loader() {
  return (
    <div className={styles.loader}>
      <BeatLoader color="#ff0000" />
    </div>
  );
}
export default Loader;
