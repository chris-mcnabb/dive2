import React from 'react';
import styles from "../../styles/website/VendorLogo.module.css";
import Image from "next/image";
import Link from "next/link";



const VendorLogos = ({logos}) => {


    return (
       <>
           <div className={styles.imageContainer}>
               {logos.map((image)=>(
                   image.vendorLogo &&
                   <div className={styles.scrollingImage} key={image._id}>

                       <a href={image.link}  as='vendor' >
                       <Image src={image.vendorLogo} alt='' height={80} width={100} priority={true} objectFit='contain'  crossOrigin="anonymous"/>
                       </a>

                   </div>

               ))}
           </div>
           <div className={styles.mobileImageContainer}>
               {logos.map((image)=>(
                   image.vendorLogo &&
                   <div className={styles.mobileScrollingImage} key={image._id}>

                       <a href={image.link}   as='vendor' >
                       <Image src={image.vendorLogo} alt='' height={50} width={50} priority={true} objectFit='contain'  crossOrigin="anonymous"/>
                       </a>

                   </div>

               ))}
           </div>
       </>
    );
};

export default VendorLogos;
