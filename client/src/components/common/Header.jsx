import styles from "./Common.module.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [menuItems, setMenuItems] = useState([
    {
      text: "Home",
      src: "/",
      isActive: true,
    },
    {
      text: "Catalog",
      src: "/catalog",
      isActive: false,
    },
    {
      text: "About us",
      src: "/about",
      isActive: false,
    },
    {
      text: "Ship",
      src: "/ship",
      isActive: false,
    },
  ]);
  return (
    <div className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__logo}>Shop</div>
        <nav className={styles.header__menu}>
          {menuItems.map((item, i) => {
            return (
              <Link
                to={item.src}
                className={
                  item.isActive
                    ? `${styles.header__menu_item} ${styles.header__menu_active}`
                    : styles.header__menu_item
                }
                key={i}
                onClick={(e) => {
                  setMenuItems([
                    ...menuItems.map((a) => {
                      return item === a
                        ? { ...a, isActive: true }
                        : { ...a, isActive: false };
                    }),
                  ]);
                }}
              >
                {item.text}
              </Link>
            );
          })}
        </nav>
        <Link to={"/cart"} className={styles.header__cart}>
          <div  className={styles.header__cart_icon}>
            <ShoppingCartIcon />
          </div>
          <span className={styles.header__cart_count}>2</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
