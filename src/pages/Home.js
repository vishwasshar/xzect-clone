import React from "react";
import classes from "./Home.module.css";
import BoxGeo from "../components/BoxGeo";
import ServiceCard from "../components/ServiceCard";
import { BiLogoCPlusPlus } from "react-icons/bi";
import Footer from "../components/Footer";
import { serviceData } from "../data/data";

const Home = () => {
  return (
    <>
      <div style={{ width: "100%", background: "black", height: "65px" }}></div>
      <div className={classes.heroSection}>
        <div className={classes.row1}>
          <h2>
            <span style={{ color: "#bd1052" }}>Build, </span>
            <span style={{ color: "#545ffd" }}>test, </span>
            <span style={{ color: "#a2a2a2" }}>and </span>
            <span style={{ color: "#019267" }}> execute your ideas </span>
            <span style={{ color: "#a2a2a2" }}> with our </span>
            <span style={{ color: "#f1ae50" }}>innovative solutions</span>
            <span style={{ color: "#545ffd" }}>.</span>
          </h2>
          <BoxGeo />
        </div>
        <div className={classes.row2}>
          <button className={classes.button}>Chat now on Whatsapp</button>
          <button className={classes.button}>Explore Our Services</button>
        </div>
      </div>
      <div className={classes.services}>
        <h2>Customised Solutions for All Your Business Needs</h2>
        <p style={{ fontSize: "1.4rem", textAlign: "center" }}>
          Take Your Business to the Next Level with Our Industry-Leading
          Services
        </p>
        <div className={classes.servicesCardContainer}>
          {serviceData.map((service, i) => {
            return (
              <ServiceCard
                key={i}
                img={service.img}
                title={service.title}
                href={service.href}
              />
            );
          })}
        </div>
      </div>
      <div className={classes.techStack}>
        <h2>Leverage our software & hardware expertise</h2>
        <p style={{ fontSize: "1.4rem", textAlign: "center", width: "80%" }}>
          Use our services and tech expertise to create disruptive products &
          solutions that can revolutionize your business and stay ahead with
          evolving technological advancements.
        </p>
        <div className={classes.techToolContainer}>
          {Array(22)
            .fill(null)
            .map((service, i) => {
              return (
                <div className={classes.techTool}>
                  <BiLogoCPlusPlus size={30} style={{ color: "#3680ff" }} />
                  C++
                </div>
              );
            })}
        </div>
        <a
          href="https://www.xzect.com/tech-stack"
          className={classes.techToolBtn}
        >
          Explore Our Entire Tech Stack
        </a>
      </div>
      <div className={classes.footerCta}>
        <h2
          style={{
            color: "#f0f0f0",
            textAlign: "center",
            fontSize: "2.75rem",
            zIndex: 5,
          }}
        >
          Innovate. Validate. Launch
        </h2>
        <h1 className={classes.gradientText}>
          Let‘s transform your idea into reality with our MVP development
          services.
        </h1>
        <a className={classes.gradientBtn}>Book a free consultation</a>
      </div>
      <Footer />
    </>
  );
};

export default Home;
