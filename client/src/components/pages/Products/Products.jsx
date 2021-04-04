import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Card from "../../common/Card";
import styles from "./Products.module.css";

const Products = (props) => {
  const history = useHistory();
  const getProducts = props.getProducts;
  useEffect(() => {
    const productsType = history.location.pathname.split("/").splice(-1)[0];
    getProducts(productsType[0].toUpperCase() + productsType.slice(1));
  }, []);
  return (
    <div className={styles.products}>
      <section className={styles.goods__wrapper}>
        {props.products ? (
          <>
            <div className={styles.goods__link}>
              <Link to="/catalog">Catalog</Link> {">"} {props.type}
            </div>
            <h2 className={styles.goods__title}>{props.type}</h2>
            <div className={styles.goods}>
              {props.products.map((item) => {
                return (
                  <Card
                    product={item}
                    key={item._id}
                    type={props.type}
                    getProductPending={props.getProductPending}
                  />
                );
              })}
            </div>
          </>
        ) : (
          "Loading"
        )}
      </section>
    </div>
  );
};

export default Products;
