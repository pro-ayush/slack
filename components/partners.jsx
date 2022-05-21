import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import styles from "../styles/partner.module.css";

const Partner = () => {
  const PartnerData = [
    {
      imageUrl: "/partners/pepsi.png",
      Name: "pepsi",
    },
    {
      imageUrl: "/partners/google.png",
      Name: "Google",
    },
    {
      imageUrl: "/partners/apple.webp",
      Name: "Apple",
    },
    {
      imageUrl: "/partners/eagle.jpg",
      Name: "eagle",
    },
    {
      imageUrl: "/partners/huawei.png",
      Name: "huawei",
    },
    {
      imageUrl: "/partners/color.jpg",
      Name: "color",
    },
    {
      imageUrl: "/partners/dell.png",
      Name: "dell",
    },
    {
      imageUrl: "/partners/starbucks.png",
      Name: "Starbucks",
    },
  ];

  return (
    <React.Fragment>
      <div className={styles.Partners}>
        <div className={styles.partnerHolder}>
          {PartnerData.map((item, index) => {
            return (
              <Image key={index} src={item.imageUrl} width={100} height={100} />
            );
          })}
        </div>

        <div className={styles.PartnerHeadingContainer}>
          <motion.h1
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 90 }}
            className={styles.PartnerHeading}
          >
            Our Partners
          </motion.h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Partner;
