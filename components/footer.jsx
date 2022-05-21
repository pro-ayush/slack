import React from 'react'


import {AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillSlackCircle, AiFillLinkedin,AiFillCopyrightCircle} from 'react-icons/ai'


import styles from '../styles/footer.module.css'
const Footer = () => {
  return (
    <React.Fragment>

        <div className={styles.Footer}>

            <div className={styles.SocialIconContainer}>
                    <h3>Connect with us on Social Media</h3>

                    <div className={styles.SocialIcons}> 
                        <AiFillFacebook className={styles.icon} />
                        <AiFillInstagram  className={styles.icon} />
                        <AiFillTwitterCircle className={styles.icon} />
                        <AiFillSlackCircle className={styles.icon} />
                        <AiFillLinkedin className={styles.icon} />
                    </div>
            </div>


            <div className={styles.FooterOptions}>

                <div className={styles.FooterSection}>
                    
                    <h2>Browse Our Pages</h2>

                    <h4><a href="/">Home</a></h4>
                    <h4><a href="/">Services</a></h4>
                    <h4><a href="/">Contact</a></h4>
                    <h4><a href="/">About</a></h4>

                </div>

                <div className={styles.FooterSection}>
                    
                    <h2>Browse Our Pages</h2>

                    <h4><a href="/">Home</a></h4>
                    <h4><a href="/">Services</a></h4>
                    <h4><a href="/">Contact</a></h4>
                    <h4><a href="/">About</a></h4>

                </div>

                <div className={styles.FooterSection}>
                    
                    <h2>Browse Our Pages</h2>

                    <h4><a href="/">Home</a></h4>
                    <h4><a href="/">Services</a></h4>
                    <h4><a href="/">Contact</a></h4>
                    <h4><a href="/">About</a></h4>

                </div>



            </div>

            <div className={styles.copyright}>
                <h3><AiFillCopyrightCircle/>Sliwebbuilder 2022</h3>
                <h3 className={styles.copyrightText}><AiFillCopyrightCircle />Saharalinks 2022</h3>

            </div>

        </div>

    </React.Fragment>
  )
}

export default Footer