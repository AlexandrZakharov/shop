import styles from "./Common.module.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    products: state.cart.products
  };
};

const mapDispatchToProps = (dispatch) => ({});

const Header = (props) => {
  const menuItems = [
    {
      text: "Home",
      src: "/",
    },
    {
      text: "Catalog",
      src: "/catalog",
    },
    {
      text: "About us",
      src: "/about",
    },
    {
      text: "Ship",
      src: "/ship",
    },
  ];
  let cartCount = 0;
  for(let product of props.products) {
    cartCount += Number(product.cart.count)
  }
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
                  item.text === props.active
                    ? `${styles.header__menu_item} ${styles.header__menu_active}`
                    : styles.header__menu_item
                }
                key={i}
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
          <span className={styles.header__cart_count}>{cartCount}</span>
        </Link>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);