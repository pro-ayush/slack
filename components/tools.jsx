import React from 'react'

import styles from '../styles/tools.module.css'
import {motion} from 'framer-motion'
import ToolCard from './toolCard'

const Tools = () => {

    const TechStack = [
        {
            title : "Next.js",
            desc:"Next is a very powerful Javascript framework capable of static site rendering , static site generation and many more features which make it one of the best frameworks to work with in 2022",
            ImageUrl : "/techStack/next.png"

        },
        {
            title : "Python",
            desc:"Next is a very powerful Javascript framework capable of static site rendering , static site generation and many more features which make it one of the best frameworks to work with in 2022",
            ImageUrl : "/techStack/python.png"

        },
        {
            title : "Flutter",
            desc:"Next is a very powerful Javascript framework capable of static site rendering , static site generation and many more features which make it one of the best frameworks to work with in 2022",
            ImageUrl : "/techStack/flutter.jpg"

        },
        {
            title : "React.js",
            desc:"Next is a very powerful Javascript framework capable of static site rendering , static site generation and many more features which make it one of the best frameworks to work with in 2022",
            ImageUrl : "/techStack/react.png"

        },
        {
            title : "Tailwind Css",
            desc:"Next is a very powerful Javascript framework capable of static site rendering , static site generation and many more features which make it one of the best frameworks to work with in 2022",
            ImageUrl : "/techStack/tailwind.png"

        },
        {
            title : "Tenserflow",
            desc:"Next is a very powerful Javascript framework capable of static site rendering , static site generation and many more features which make it one of the best frameworks to work with in 2022",
            ImageUrl : "/techStack/tensorflow.png"

        },

    ]


  return (
    <React.Fragment>
        <div className={styles.Tools}>

            <motion.h1>Tech Stack We Use</motion.h1>
            

            <div className={styles.StacksHolder}>
                    
                    {
                        TechStack.map((item,index)=>{
                            return (
                        
                                <ToolCard key={index}
                              ImageUrl={item.ImageUrl} title={item.title} desc={item.desc} />
                            )
                        })
                    }

            </div>

        </div>

    </React.Fragment>
  )
}

export default Tools