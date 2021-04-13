import styles from "./Common.module.css";
import { Link, useParams } from "react-router-dom";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import TabletIcon from "@material-ui/icons/Tablet";
import LaptopIcon from "@material-ui/icons/Laptop";
import HeadsetIcon from "@material-ui/icons/Headset";

const Navbar = (props) => {
  const menuItems = [
    {
      text: "Phones",
      src: "/catalog/phones",
      icon: PhoneAndroidIcon,
    },
    {
      text: "Tablets",
      src: "/catalog/tablets",
      icon: TabletIcon,
    },
    {
      text: "Laptops",
      src: "/catalog/laptops",
      icon: LaptopIcon,
    },
    {
      text: "Headsets",
      src: "/catalog/headsets",
      icon: HeadsetIcon,
    },
  ];
  const { productType } = useParams();

  const setIconStyle = (param, isIcon = false) => {
    switch (isIcon) {
      case true:
        return productType === param
          ? {
              fontSize: "30px",
              color: "#FFFFFF",
            }
          : {
              fontSize: "30px",
              color: "#858585",
            };
      case false:
        return productType === param
          ? {
              color: "#FFFFFF"
            }
          : null;
      default:
        return;
    }
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__wrapper}>
        <div className={styles.navbar__menu}>
          {menuItems.map((item) => (
            <Link to={item.src} className={styles.navbar__item} key={item.src}>
              <item.icon style={setIconStyle(item.text.toLowerCase(), true)} />
              <span
                className={styles.navbar__item_name}
                style={setIconStyle(item.text.toLowerCase())}
              >
                {item.text}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
