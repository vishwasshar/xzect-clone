import React, { useRef } from "react";
import classes from "./ServiceCard.module.css";

const ServiceCard = (props) => {
  return (
    <>
      <a className={classes.serviceCard} href={props.href}>
        <img src={props.img} className={classes.cardImage} />
        <h3 className={classes.cardTitle}>{props.title}</h3>
        <div className={classes.cardLink}>Get Started</div>
      </a>
    </>
  );
};

export default ServiceCard;
