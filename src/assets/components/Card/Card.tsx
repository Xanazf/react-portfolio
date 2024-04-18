import styles from "./Card.module.css";
import React from "react";
import CardItem from "./CardItem";

interface CardProps {
  values: { [key: string]: number };
}

const Card: React.FC<CardProps> = (props) => {
  const values = props.values;
  const keys = Object.keys(values);

  return (
    <div className={styles.card_wrapper}>
      {keys.map((key: string, index) => {
        return (
          <div className={styles.card} key={index}>
            <CardItem skill={key} value={values[key]} />
          </div>
        );
      })}
    </div>
  );
};

export default Card;
