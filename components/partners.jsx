import React from 'react'
import Image from 'next/image'

import styles from  "../styles/partner.module.css"

const Partner = () => {

  const PartnerData = [
    {
        imageUrl : "/partners/pepsi.png",
        Name : "pepsi"
    },
    {
      imageUrl : "/partners/pepsi.png",
      Name : "pepsi"
  },
  {
    imageUrl : "/partners/pepsi.png",
    Name : "pepsi"
},
{
  imageUrl : "/partners/pepsi.png",
  Name : "pepsi"
},
{
  imageUrl : "/partners/pepsi.png",
  Name : "pepsi"
},
{
  imageUrl : "/partners/pepsi.png",
  Name : "pepsi"
},
{
  imageUrl : "/partners/pepsi.png",
  Name : "pepsi"
},
{
  imageUrl : "/partners/pepsi.png",
  Name : "pepsi"
},
    
  ]

  return (
    <React.Fragment>
      <div className={styles.Partners}>

        <div className="partnerHolder">
            {
              PartnerData.map((item, index)=> {
                return (
                  <React.Fragment key={index}>
                      <Image src={item.imageUrl} width={100} height={100} />
                  </React.Fragment>
                );
              })
            }
        </div>

        <div className={styles.headingContainer} >
            
            <h1>Our Partners</h1>

        </div>

      </div>
    </React.Fragment>
  )
}

export default Partner