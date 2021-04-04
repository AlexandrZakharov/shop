import styles from "./Product.module.css";
import { Link, useHistory } from "react-router-dom";
import ImgSlider from "./components/ImgSlider";
import { useEffect } from "react";

const Product = (props) => {
  const history = useHistory();
  useEffect(() => {
    const productLink = history.location.pathname.split("/").splice(-1)[0];
    props.getProduct(productLink);
  }, []);

  return (
    <div className={styles.product}>
      {props.product ? (
        <>
          <div className={styles.product__link}>
            <Link to="/catalog">Catalog</Link> {">"}{" "}
            <Link to={`/catalog/${props.product.type.toLowerCase()}`}>
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
              {props.product.configurations.length ? (
                <div className={styles.product__configuration}>
                  {props.product.configurations[0].memory ? (
                    <>
                      <span>Memory:</span>
                      <div className={styles.configuration__type}>
                        {props.product.configurations.map((conf) => {
                          return <div className={styles.configuration__type_item}>{conf.memory}</div>;
                        })}
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  {props.product.configurations[0].RAM ? (
                    <>
                      <span>RAM:</span>
                      <div className={styles.configuration__type}>
                        {props.product.configurations.map((conf) => {
                          return <div className={styles.configuration__type_item}>{conf.RAM}</div>;
                        })}
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  <div className={styles.conf__colors}>
                    <span>Color:</span>
                    {props.product.colors.map((color) => {
                      return (
                        <div
                          className={styles.card__color}
                          style={{ background: `${color.hex}` }}
                          key={color._id}
                        >
                          <span className={styles.card__color_name}>
                            {color.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </>
      ) : (
        "LOADING..."
      )}
    </div>
  );
};

export default Product;
