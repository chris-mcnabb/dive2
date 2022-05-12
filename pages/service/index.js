import styles from '../../styles/website/Service.module.css'
import Image from "next/image";
import logo from "../../public/img/headerlogo.svg";




const Service = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.img}>
                    <Image src={logo} alt="" height={100} width={300} objectFit="contain"/>
                </div>
                <h1>Service & Repair</h1>

            </div>

        </div>
    );
};

export default Service;
Service.layout = "L3";
