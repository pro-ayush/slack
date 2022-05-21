import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/services.module.css";
import Cards from "./Cards";

function Services() {
  const ServicesList = [
    {
      title: "Web Design",
      description: "lorem ipsum orem ipsum is a wonderful thing , i love using it because it is amazing and powerful as f****",
      ImageUrl: "/resources/web.svg",
    },
    {
      title: "Logo Making",
      description: "lorem ipsum orem ipsum is a wonderful thing , i love using it because it is amazing and powerful as f****",
      ImageUrl: "/resources/logo.svg",
    },
    {
      title: "UI/UX",
      description: "lorem ipsum is a wonderful thing , i love using it because it is amazing and powerful as f****",
      ImageUrl: "/resources/ui.svg",
    },
    {
      title: "Mobile App",
      description: "lorem ipsum orem ipsum is a wonderful thing , i love using it because it is amazing and powerful as f****",
      ImageUrl: "/resources/mobile.svg",
    },
    {
      title: "Hosting",
      description: "lorem ipsum orem ipsum is a wonderful thing , i love using it because it is amazing and powerful as f****",
      ImageUrl: "/resources/hosting.svg",
    },
    {
      title: "Security",
      description: "lorem ipsum is a wonderful thing , i love using it because it is amazing and powerful as f****",
      ImageUrl: "/resources/security.svg",
    },
  ];

  return (
    <React.Fragment>
      <div className={styles.ServiceContainer}>
        <motion.h1 className="ServiceHeading">Our Services</motion.h1>

        <div className={styles.CardHolder}>
          {ServicesList.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <Cards
                  title={item.title}
                  desc={item.description}
                  ImageUrl={item.ImageUrl}
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Services;
