import styles from "./Product.module.css";
import { Link, useParams } from "react-router-dom";
import ImgSlider from "./components/ImgSlider";
import { useEffect, useState } from "react";
import Navbar from "../../common/Navbar";
import Header from "../../common/Header";
import CircularProgress from "@material-ui/core/CircularProgress";

const Product = (props) => {
  const { productLink } = useParams();

  useEffect(() => {
    props.getProduct(productLink);
  }, [productLink]);

  const valueStyle = (isSelected = false, color = false) => {
    if (isSelected && color) {
      return {
        outline: "3px solid rgb(204, 204, 204)",
        background: color,
      };
    } else if (color) {
      return {
        border: "1px solid rgb(204, 204, 204)",
        background: color,
      };
    } else if (isSelected) {
      return {
        outline: "3px solid rgb(204, 204, 204)",
      };
    } else {
      return {
        border: "1px solid rgb(204, 204, 204)",
      };
    }
  };

  return (
    <div className={styles.product}>
      <Header active={"Catalog"} />
      <Navbar />
      <div className="Container">
        {props.product ? (
          <>
            <div className={styles.product__link}>
              <Link to="/catalog">Catalog</Link> {">"}{" "}
              <Link to={`/catalog/${props.product.type}`}>
                {props.product.type}
              </Link>{" "}
              {">"} {props.product.name}
            </div>
            <h2 className={styles.goods__title}>{props.product.type}</h2>
            <div className={styles.product__wrapper}>
              <div className={styles.product__left}>
                <div className={styles.product__slider}>
                  <ImgSlider images={props.product.images} />
                </div>
              </div>
              <div className={styles.product__right}>
                <h1 className={styles.product__name}>{props.product.name}</h1>
                <span className={styles.product__releaseDate}>
                  {props.product.releaseDate}
                </span>
                <span className={styles.product__description}>
                  {props.product.description}
                </span>
                {props.product.config.length ? (
                  <div className={styles.product__configs}>
                    {props.product.config.map((conf, i) => {
                      return (
                        <div className={styles.product__config} key={i}>
                          <span className={styles.config__name}>
                            {conf.configName}:{" "}
                            {props.product.selectedConfig[conf.configName]}
                          </span>
                          <div className={styles.config__values}>
                            {conf.values.map((value, n) => {
                              return (
                                <div
                                  className={styles.config__value}
                                  key={n}
                                  style={valueStyle(
                                    value.isSelected,
                                    value.hex
                                  )}
                                  onClick={() => {
                                    props.selectConfig(
                                      conf.configName,
                                      value.value
                                    );
                                    props.calculateTotalPrice();
                                  }}
                                >
                                  {conf.configName !== "colors"
                                    ? value.value
                                    : ""}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  ""
                )}
                <span className={styles.product__price}>
                  Price:
                  {props.product.selectedConfig?.totalPrice
                    ? `$${props.product.selectedConfig.totalPrice}`
                    : `from $${props.product.minPrice}`}
                </span>
                {props.product.selectedConfig.totalPrice ? (
                  <div
                    className={styles.product__button}
                    onClick={() => props.addToCart(props.product)}
                  >
                    Add to cart
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </>
        ) : (
          <CircularProgress />
        )}
      </div>
    </div>
  );
};

export default Product;
