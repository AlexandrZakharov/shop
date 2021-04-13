import styles from "./Cart.module.css";
import Header from "../../common/Header";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const Cart = (props) => {
  const renderConfig = (item) => {
    return Object.keys(item.selectedConfig).filter(
      (key) => key !== "totalPrice"
    );
  };

  console.log(props.cart);
  return (
    <div className={styles.cart}>
      <Header />
      <div className="Container">
        <div className={styles.cart__wrapper}>
          <div className={styles.cart__items}>
            {props.cart.products.map((item, i) => {
              return (
                <div className={styles.cart__item} key={i}>
                  <div
                    className={styles.item__img}
                    style={{ backgroundImage: `url(${item.images[0]})` }}
                  ></div>
                  <div className={styles.item__info}>
                    <h3 className={styles.item__name}>{item.name}</h3>
                    <div className={styles.item__description}>
                      {item.description}
                    </div>
                    <div className={styles.item__configuration}>
                      {renderConfig(item).map((key) => {
                        console.log(item.selectedConfig[key]);
                        return (
                          <div className={styles.item__singleConfig}>
                            <span className={styles.singleConfig__key}>
                              {key}:{" "}
                            </span>
                            <span className={styles.singleConfig__value}>
                              {item.selectedConfig[key]}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className={styles.item__delete}>
                    <DeleteForeverIcon style={{fontSize: '24px'}} />
                  </div>
                  <div className={styles.item__count}>{item.cart.count}</div>
                  <div className={styles.item__price}>
                    ${item.cart.price},00
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.cart__totalInfo}>
            <div className={styles.totalInfo__count}>
              {props.cart.count} items worth:
            </div>
            <div className={styles.totalInfo__totalPrice}>
              ${props.cart.totalPrice},00
            </div>
          </div>
          <Link to="/checkout">
            <div className={styles.checkout__button}>Checkout</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
