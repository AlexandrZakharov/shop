import styles from "./Common.module.css";
import { Link } from "react-router-dom";
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import TabletIcon from '@material-ui/icons/Tablet';
import LaptopIcon from '@material-ui/icons/Laptop';
import HeadsetIcon from '@material-ui/icons/Headset';

const Navbar = props => {
  const iconStyles = {
    fontSize: '30px',
    color: '#fff'
  }
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__wrapper}>
        <Link to={'/catalog/phones'} className={styles.navbar__item}>
          <PhoneAndroidIcon style={iconStyles} />
          <span className={styles.navbar__item_name}>Phones</span>
        </Link>
        <Link to={'/catalog/tablets'} className={styles.navbar__item}>
          <TabletIcon style={iconStyles} />
          <span className={styles.navbar__item_name}>Tablets</span>
        </Link>
        <Link to={'/catalog/laptops'} className={styles.navbar__item}>
          <LaptopIcon style={iconStyles} />
          <span className={styles.navbar__item_name}>Laptops</span>
        </Link>
        <Link to={'/catalog/headsets'} className={styles.navbar__item}>
          <HeadsetIcon style={iconStyles} />
          <span className={styles.navbar__item_name}>Headsets</span>
          
        </Link>
      </div>
    </div>
  )
}

export default Navbar;