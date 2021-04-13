import styles from "./Common.module.css";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import { Link } from "react-router-dom";

const Card = (props) => {
  const fillStars = () => {
    const stars = [
      <StarBorderIcon />,
      <StarBorderIcon />,
      <StarBorderIcon />,
      <StarBorderIcon />,
      <StarBorderIcon />,
    ];
    return stars.map((star, i) => {
      if (i <= Math.floor(props.product.rating) - 1) {
        return <StarIcon key={i} />;
      } else if (
        i + 1 === Math.floor(props.product.rating) + 1 &&
        props.rating % Math.floor(props.product.rating) !== 0
      ) {
        return <StarHalfIcon key={i} />;
      } else return <StarBorderIcon key={i} />;
    });
  };
  return (
    <div className={styles.card}>
      <div className={styles.card__left}>
        <Link
          to={`/catalog/${props.product.type}/${props.product.link}`}
          className={styles.img__wrapper}
          onClick={props.getProductPending}
        >
          <div
            className={styles.img__wrapper_img}
            style={{ backgroundImage: `url(${props.product.images[0]})` }}
          />
        </Link>
        <span className={styles.card__minPrice}>
          <span>From</span> ${props.product.minPrice}
        </span>
        <Link
          to={`/catalog/${props.product.type}/${props.product.link}`}
          onClick={props.getProductPending}
          className={styles.card__addToCart}
        >
          <div>More info</div>
        </Link>
      </div>
      <div className={styles.card__right}>
        <h3 className={styles.card__name}>
          <Link
            to={`/catalog/${props.product.type}/${props.product.link}`}
            onClick={props.getProductPending}
          >
            {props.product.name}
          </Link>
        </h3>
        <div className={styles.card__rating}>{fillStars()}</div>
        <span className={styles.card__description}>
          {props.product.description}
        </span>
        <div className={styles.card__actions}>
          <Link to={"/"} className={styles.card__reviews}>
            Reviews
          </Link>
          <div className={styles.card__colors}>
            {props.product.colors.map((color) => {
              return (
                <div
                  className={styles.card__color}
                  style={{ background: `${color.hex}` }}
                  key={color._id}
                >
                  <span className={styles.card__color_name}>{color.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
