import styles from '../styles/website/Overons.module.css'
import Link from "next/link";
import FAQ from "../components/website/overons/FAQ";
import {ArrowBackIosNewOutlined} from "@mui/icons-material";
import  {useState} from "react";
import Staff from "../components/website/overons/Staff";
import Contact from "../components/website/overons/Contact";
import axios from "axios";


const Overons = ({image}) => {
    const [section, setSection] = useState('')
    const [subGroup, setSubGroup] = useState('faq')
    const handleClick = (data) => {
        if(section !==data){
            setSection(data)
        }else{
            setSection('')
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.back}>
                <Link href="/" passHref>
                    <h1 className={styles.terug}><ArrowBackIosNewOutlined/> Terug</h1>
                </Link>
                <h1>Overons</h1>
            </div>
            <div className={styles.buttonContainer}>
               <button  className={styles.sub} onClick={()=>setSubGroup('faq')}>
                   FAQ
               </button>
                <button  className={styles.sub} onClick={()=>setSubGroup('staff')}>
                    Onze Staff
                </button>
                <button  className={styles.sub} onClick={()=>setSubGroup('overons')}>
                    Over Ons
                </button>
            </div>
            {subGroup === 'faq' && <FAQ section={section} handleClick={handleClick}/>}
            {subGroup === 'staff' && <Contact section={section} image={image} handleClick={handleClick}/> }
            {subGroup === 'overons' && <Contact section={section} image={image} handleClick={handleClick}/> }

        </div>
    );
};

export default Overons;
Overons.layout = "L3";

export const getServerSideProps = async () => {
    const img = await axios.get(process.env.VERCEL_URL+`/api/images`);

    return{
        props: {
            image: img.data
        }
    }
}
