import styles from "../../styles/website/Slider.module.css"
import Image from "next/image";
import {useState} from "react";
import Link from 'next/link'
const Slider = () => {
    const [index, setIndex] = useState(0)
    const images =[
      '/img/slider/1_1584619536New.jpeg',
        '/img/slider/2_1411059630.jpeg',
        '/img/slider/2_1431692400.jpeg',
        '/img/slider/8_1411059632.jpeg',
        '/img/slider/9_1411059633.jpeg',
        '/img/slider/10_1411059633.jpeg'


    ];
    const handleArrow = (direction) => {
        if(direction==="left"){
            setIndex(index !==0 ? index-1 : 5)
        }
        if(direction==="right"){
            setIndex(index !==5 ? index+1 : 0)
        }
    }
    console.log(index)
    /*<div className={styles.intro}>
        <button className={styles.button}>SHOP NOW</button>
</div>*/
    return (
        <div className={styles.container}>

               <div className={styles.intro}>
                   <Link href='/shop'>
                       <button className={styles.button}>SHOP NOW</button>
                   </Link>
               </div>


            <div className={styles.wrapper} style={{transform: `translateX(${-100*index}vw)`}}>

                    {images.map((img, i)=>(
                        <div key={i} className={styles.imgContainer}>
                        <Image className={styles.img} src={img}  alt="" layout="fill" objectFit="cover"/>

                        </div>
                    ))}

            </div>

        </div>
    );
};

export default Slider;
