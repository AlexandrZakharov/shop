import styles from "../Catalog.module.css";
import { Link } from "react-router-dom";

const CatalogItem = (props) => {
  return (
    <Link to={`/catalog/${props.type}/${props.link}`} className={styles.catalog__item}>
      <span className={styles.item__name}>{props.name}</span>
      <div className={styles.item__img} style={{backgroundImage: `url(${props.images[0]})`}}></div>
      <span className={styles.item__price}>${props.minPrice}</span>
    </Link>
  )
}

export default CatalogItem;