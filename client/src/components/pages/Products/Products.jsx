import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../../common/Card";
import styles from "./Products.module.css";
import Navbar from '../../common/Navbar';
import Header from '../../common/Header';
import CircularProgress from "@material-ui/core/CircularProgress";

const Products = (props) => {
  const getProducts = props.getProducts;
  const { productType } = useParams();
  useEffect(() => {
    props.clearState()
    getProducts(productType);
  }, [productType]);
  return (
    <div className={styles.products}>
      <Header active={'Catalog'} />
      <Navbar />
      <div className="Container">
        {props.products ? (
          <>
            <div className={styles.goods__link}>
              <Link to="/catalog">Catalog</Link> {">"} {props.type}
            </div>
            <span className={styles.products__title}>{props.type}</span>
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
          <CircularProgress />
        )}
      </div>
    </div>
  );
};

export default Products;
