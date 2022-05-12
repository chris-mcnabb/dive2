import styles from '../../styles/admin/AdminNavbar2.module.css'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import {ExitToApp, Settings} from "@material-ui/icons";
import React, {useState} from "react";
import {useRouter} from "next/router";
import Modal from "../Modal";
import Add from "./Add";
import {useSession, signOut} from "next-auth/react";
import {AccountCircleOutlined} from "@mui/icons-material";
import Link from "next/link";
import useToggle from "../hooks/useToggle";

const Navbar = () => {
    const [showModal, setShowModal] = useToggle()
    const [active, setActive] = useToggle()
    const router = useRouter()
    const { data: session } =   useSession()

    const handleClick = () => {
        setShowModal();
    }
    console.log(session)
    return (
        <>
    <Modal showModal={showModal} setShowModal={setShowModal} title={'Nieuw'}/>
        <div className={styles.navbar}>
            <div className={styles.wrapper}>
                <div className={styles.search}>
                    <input className={styles.input} type="text" placeholder='Search...'/>
                    <SearchOutlinedIcon/>
                </div>
                <div className={styles.user}>
                    {session && <h2>Dag {session.firstName}</h2>}
                </div>
                <div className={styles.items}>

                    <div className={styles.item}>

                        <button className={styles.productAddButton2} onClick={handleClick}>Nieuw</button>


                    </div>
                    <div className={styles.item}>
                        <div className={styles.avatar} onClick={()=>setActive()}>
                            <div className={styles.avatarText}>
                                {session && <span>{session.user.firstName[0].toUpperCase()}{session?.user.lastName[0].toUpperCase()}</span>}
                            </div>
                        </div>
                       <div className={active === true ? styles.infoBoxContainerActive : styles.infoBoxContainer} onClick={()=>setActive()}>
                           <div className={styles.infoBox}>
                               <div className={styles.popUpTitle}>
                                   <h3>👋 Dag {session?.firstName}</h3>
                                   <hr/>
                               </div>
                               <div className={styles.popUpOptions}>
                                   <Link href={`/admin/users/employee/${session?.id}`}>
                                    <span>
                                    <AccountCircleOutlined   className={styles.popUpIcon}/>
                                     Profile
                                </span>
                                   </Link>
                                   <span  onClick={()=>signOut()}>
                                       <ExitToApp   className={styles.popUpIcon}/>
                                    Logout
                                </span>

                               </div>

                           </div>

                       </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Navbar;
