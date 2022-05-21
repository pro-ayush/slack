import React, { useState } from "react";
import Image from "next/image";

import styles from "../styles/tools.module.css";
import {motion} from 'framer-motion';

const ToolCard = (props) => {
  const [is__tool__open, set_is_tool_open] = useState(false);

  return (
    <React.Fragment>
      <motion.div whileHover={{scale:1.1}} initial={{scale:0}} animate={{scale:1}} transition={{duration:1}} layout onClick={()=>{set_is_tool_open(!is__tool__open)}} className={styles.toolCard}>
        <div className={styles.logoContainer}>
          <Image src={props.ImageUrl} width={60} height={60} />
          <motion.h4 layout className={styles.toolCardHeading}>{props.title}</motion.h4>
        </div>

        <div className={styles.textContainer}>

          {is__tool__open && <p>{props.desc}</p>}
        </div>
      </motion.div>
    </React.Fragment>
  );
};

export default ToolCard;
