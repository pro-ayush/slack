import React, { useState } from "react";
import Image from "next/image";

import { motion} from "framer-motion";
import styles from "../styles/Cards.module.css";
import {AiOutlineClose} from 'react-icons/ai';



const Cards = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const CardClickHandler = () => {
    setIsOpen(!isOpen);
  };



  return (
    <React.Fragment>

        {!isOpen ? 
      <motion.div whileHover={{scale : 1.1}} className={styles.CompactCard} onClick={CardClickHandler} transition={{duration:0.5}}>



        <div className={styles.Image_heading}>
          <Image src={props.ImageUrl} width={150} height={150} />
          <motion.h3 className={styles.CardHeading}>{props.title}</motion.h3>


        </div>



      </motion.div>:

      <div  className={styles.CardCover}>

      
      <motion.div layout initial={{scale:0}} animate={{scale:1}} transition={{duration:0.4}} className={styles.ExpandedCard}>

            <AiOutlineClose className={styles.CloseIcon} onClick={()=>setIsOpen(!isOpen)} />

          <div>
          <Image className={styles.ExpandedImage} src={props.ImageUrl} width={350} height={350} />
        </div>

        <div className={styles.CardDescription}>
          <h3 className={styles.ExpandedHeading}>{props.title}</h3>
          <p className={styles.ExpandedDesc}>{props.desc}</p>
          <button className={styles.ExpandedButton}>
            Book a Call

          </button>
        </div>
      </motion.div>

      </div>
    
}


    </React.Fragment>
  );
};

export default Cards;
