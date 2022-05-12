import styles from '../../styles/website/ImageModal.module.css';
import Image from "next/image";
import React from "react";
const ImageModal = ({img, pic,setShowModal}) => {
    return (
        <div className={styles.container}>

            <div className={styles.wrapper}>
                <div className={styles.close} onClick={(()=>setShowModal())}>
                 <span>
                  X
              </span>
                </div>
               <Image src={img} alt='' height={800} width={800} objectFit="contain"/>
           </div>
            <div>
                {pic.length > 1 && pic.map((picture, idx)=>(
                    <Image className={styles.img} value={idx} src={`/img/${picture}`} alt="" height={100} width={100} objectFit="contain" />
                ))}


            </div>
        </div>
    );
};

export default ImageModal;
