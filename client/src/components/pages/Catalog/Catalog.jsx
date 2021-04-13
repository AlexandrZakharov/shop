import styles from "./Catalog.module.css";
import { Link } from "react-router-dom";
import Navbar from "../../common/Navbar";
import Header from "../../common/Header";
import { useEffect } from "react";
import CatalogItem from "./components/CatalogItem";
import CircularProgress from "@material-ui/core/CircularProgress";

const Catalog = (props) => {
  const catalogItems = [];
  useEffect(() => {
    props.getCatalog();
  }, []);
  return (
    <div className={styles.catalog}>
      <Header active={"Catalog"} />
      <Navbar />
      <div className="Container">
        <div className={styles.catalog__inner}>
          {props.catalog ? (
            props.catalog.map((item, i) => {
              if (!catalogItems.includes(item.type)) {
                catalogItems.push(item.type);
                return (
                  <div className={styles.catalog__type} key={i}>
                    <div className={styles.catalog__type_title}>
                      <Link to={`/catalog/${item.type}`}>{item.type}</Link>
                    </div>

                    <div className={styles.catalog__items}>
                      {item.products.map((prod) => (
                        <CatalogItem key={prod._id} {...prod} />
                      ))}
                    </div>
                  </div>
                );
              }
            })
          ) : (
            <CircularProgress />
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
