import styles from "./Card.module.scss";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          src="/img/heart-unchecked.svg"
          alt="Unchecked"
        />
      </div>
      <img
        className={styles.sneakersImg}
        src={props.img}
        alt="sneakers"
      />
      <h5 className={styles.sneakersName}>{props.title}</h5>
      <div className={styles.cardBottom}>
        <div className={styles.price}>
          <span className={styles.priceText}>цена:</span>
          <b className={styles.priceCount}>{props.price} руб.</b>
        </div>
        <img
          className={styles.button}
          src="/img/plus.svg"
          alt="plus"
          onClick={props.onClick}
        />
      </div>
    </div>
  );
};

export default Card;
