import styles from '../styles/website/Overons.module.css'
import Link from "next/link";
import FAQ from "../components/website/overons/FAQ";
import {ArrowBackIosNewOutlined} from "@mui/icons-material";
import  {useState} from "react";
import Staff from "../components/website/overons/Staff";


const Overons = () => {
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
                <Link href="/">
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
            {subGroup === 'staff' && <Staff section={section} handleClick={handleClick}/> }
            {subGroup === 'overons' && <span>Over Ons</span> }

        </div>
    );
};

export default Overons;
Overons.layout = "L3";
