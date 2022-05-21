import React from "react";
// import Image from "next/image";
import styles from "../styles/main.module.css";
import { motion } from "framer-motion";


import Lottie from 'react-lottie'
import animationData from  "../public/resources/lotties/webdevelopment.json"


function Main() {

  const defaultOptions = {
      loop : true,
      autoplay : true,
      animationData : animationData,
      rendererSettings : {
        preserveAspectRatio: "xMidYMid slice"
      }
  };

  return (
    <React.Fragment>
      <div className={styles.textContainer}>
        <h1 className={styles.HeroHeading}>Web Apps as Quick as possible with Ayush.js</h1>
        <p className={styles.HeroDesc}>
          Slack is a messenger service for Workign Professionals looking for a
          Non Distractive Chat App
        </p>

        <button className={styles.ContactUs}>Contact Us</button>
      </div>

      <div className={styles.ImageContainer}>
        <motion.div initial={{y:500}} animate={{y:0}} transition={{duration:1}} className={styles.imageHolder}>
          <Lottie options={defaultOptions} width={600} height={500} />
 
        </motion.div>
      </div>
    </React.Fragment>
  );
}

export default Main;
