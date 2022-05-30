import styles from '../../styles/website/Service.module.css'
import Image from "next/image";
import logo from "../../public/img/headerlogo.svg";
import Link from "next/link";
import {ArrowBackIosNewOutlined} from "@mui/icons-material";
import axios from "axios";
import Contact from "../../components/website/overons/Contact";




const Service = ({image}) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.img}>

                        <Link href="/">
                            <h1 className={styles.terug}><ArrowBackIosNewOutlined/> Terug</h1>
                        </Link>

                </div>
                <h1>Service & Repair</h1>
            </div>
            <Contact image={image}/>
        </div>
    );
};

export default Service;
Service.layout = "L3";
export const getServerSideProps = async () => {
    const img = await axios.get(process.env.VERCEL_URL+`/api/images`);

    return{
        props: {
            image: img.data
        }
    }
}
