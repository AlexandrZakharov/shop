import styles from "./Ship.module.css";
import Header from '../../common/Header';

const Ship = (props) => {
  return (
    <div className={styles.ship}>
      <Header />
      <div className="Container">Ship</div>
    </div>
  )
}

export default Ship;