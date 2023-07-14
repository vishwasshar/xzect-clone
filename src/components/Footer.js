import React from "react";
import classes from "./Footer.module.css";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.about}>
        <h3>Xzect Labs Pvt. Ltd.</h3>
        <p>
          Xzect provides a diverse array of services that enable both businesses
          and individuals to bring their vision to life . Our specialties
          include software development, website design and SEO, cloud services,
          robotics and automation, 3D printing and prototyping, data science and
          analytics, AI and machine learning, IOT, AR and VR, blockchain, and
          other tech-related services. Our team of experienced professionals is
          available to assist with the design and development of new products,
          exploration of robotics and automation possibilities, or any other
          requirements.
        </p>
        <address>
          Registered Address: 203, 2-A/3, Asaf Ali Road, Delhi - 110002
        </address>
        <p>CIN: U72200DL2022PTC408714</p>
        <p>GST: 07AAACX4373J1Z2</p>
        <div className={classes.socialLinks}>
          {Array(6)
            .fill(null)
            .map(() => {
              return (
                <BsFacebook
                  size={30}
                  style={{
                    color: "blue",
                    background: "white",
                    borderRadius: "100%",
                    border: "2px solid blue",
                  }}
                />
              );
            })}
        </div>
      </div>
      <div className={classes.services}>
        <h4>Services</h4>
        {Array(10)
          .fill(null)
          .map(() => {
            return <a href="#"> Software & App Development </a>;
          })}
      </div>
      <div className={classes.industries}>
        <h4>Industries</h4>
        {Array(6)
          .fill(null)
          .map(() => {
            return <a href="#">Software & App Development</a>;
          })}
      </div>
      <div className={classes.resources}>
        <h4>Resources</h4>
        {Array(15)
          .fill(null)
          .map(() => {
            return <a href="#">Software & App Development</a>;
          })}
      </div>
    </footer>
  );
};

export default Footer;
