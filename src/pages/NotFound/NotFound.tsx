import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";
const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h3 className={styles.notFound__title}>Упс..</h3>
      <p className={styles.notFound__text}>
        Такой страницы не существует. Go <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
