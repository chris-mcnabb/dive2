import styles from "../../styles/admin/AdminNavbar.module.css"
import { Settings } from "@material-ui/icons";
import Image from "next/image"
import logo from "../../public/img/headerlogo.svg"
import {useRouter} from "next/router"
import Modal from "../Modal"
import React, {useState} from "react";



export default function AdminNavbar() {
    const handleClick = () => {

        setShowModal(true);
    }
   const [showModal, setShowModal] = useState(false)
    const router = useRouter()
    return (
        <>
            <Modal showModal={showModal} setShowModal={setShowModal} />
        <div className={styles.topbar}>

            <div className={styles.topbarWrapper}>

                    <Image src={logo}
                           priority={true}
                           alt=""
                           height="200"
                           width="220"
                           objectFit="contain"
                    />


                <div className={styles.topRight}>
                    <div className={styles.topbarIconContainer}>

                        <button className={styles.productAddButton2} onClick={handleClick}>Nieuw</button>

                        <button className={styles.logoutButton}>
                            <div className={styles.settingsContainer}>
                                <span className={styles.logOut} onClick={()=>signOut()}>Logout</span>
                                <Settings />
                            </div>
                        </button>
                    </div>

                </div>
            </div>
        </div>
        </>
    );
}
