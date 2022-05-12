import React from 'react';
import styles from "../../styles/website/VendorLogo.module.css";
import Image from "next/image";
import aqua from "../../public/img/aqualung.png";
import apeks from "../../public/img/apeks-logo.png";
import bare from "../../public/img/bare.png";
import light from "../../public/img/lightmotion.png";
import mares from "../../public/img/mares_logo.png";
import padi from "../../public/img/padi.png";
import shearwater from "../../public/img/shearwater.png";
import suunto from "../../public/img/suunto.png";
import tusa from "../../public/img/tusa_banner.png";
import fourthElement from "../../public/img/4thElement.png";
import xDeep from "../../public/img/xdeep-removebg-preview.png"


const VendorLogos = () => {

    const vendorLogos = [

        {id: 1, name: aqua},
        {id: 2, name: apeks},
        {id: 3, name: bare},
        {id: 4, name: light},
        {id: 5, name: mares},
        {id: 6, name: padi},
        {id: 7, name: shearwater},
        {id: 8, name: suunto},
        {id: 9, name: tusa},
        {id: 10, name: fourthElement},
        {id: 11, name: xDeep},
    ]
    return (
        <div className={styles.imageContainer}>
            {vendorLogos.map((image)=>(
                <div className={styles.scrollingImage} key={image.id}>
                    <Image src={image.name} alt='' height={250} width={250} objectFit='contain'/>
                </div>
            ))}
        </div>
    );
};

export default VendorLogos;
