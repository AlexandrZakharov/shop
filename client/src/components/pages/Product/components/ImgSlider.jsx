import React from "react";
import { useState } from "react";
import styles from "../Product.module.css";

const ImgSlider = (props) => {
  const [translate, setTranslate] = useState(0);
  const [position, setPosition] = useState(1);
  const nextSlide = () => {
    setPosition(position + 1);
    setTranslate(translate - 500);
  };
  const prevSlide = () => {
    setPosition(position - 1);
    setTranslate(translate + 500);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.img__wrapper}>
        {props.images.map((img, i) => {
          return (
            <div
              className={styles.img__wrapper_img}
              style={{
                backgroundImage: `url(${img})`,
                transform: `translateX(${translate}px)`,
              }}
              key={i}
            ></div>
          );
        })}
      </div>
      <div className={styles.slider__nav}>
        {position !== 1 ? (
          <div
            className={`${styles.slider__nav_arrow} ${styles.slider__nav_left}`}
            onClick={prevSlide}
          >
            <span>{"<"}</span>
          </div>
        ) : (
          <div></div>
        )}
        {position !== props.images.length ? (
          <div
            className={`${styles.slider__nav_arrow} ${styles.slider__nav_right}`}
            onClick={nextSlide}
          >
            <span>{">"}</span>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default ImgSlider;
