import React from 'react';
import styles from "../../styles/Navbar3.module.css";
import Link from "next/link";
import {AccountCircleOutlined, SearchOutlined} from "@mui/icons-material";
import {ExitToApp} from "@material-ui/icons";
import Image from "next/image";
import mask from "../../public/img/WEB-Zensee-Pro-M1010S-QBA.jpg";
import DropDown from "../DropDown";

const MainNavigation = ({setActive, active, session, user, setTitle, handleClick, handleLogOut, test, showDropdown}) => {
    return (
        <div className={styles.item}>
            <div className={styles.userSession}>
                {(user?.isEmployee || user?.isAdmin) &&
                    <Link href="/admin" >
                        <span className={styles.adminItem}>Admin</span>
                    </Link>
                }
                {session &&  <><span className={styles.hand}>👋</span> <span  className={styles.listItem}>Dag {session.firstName}</span></> }
            </div>
            <ul className={styles.list}>
                <Link href="/" >
                    <li className={styles.listItem}>Home</li>
                </Link>
                <Link href="/learn" >
                    <li className={styles.listItem}>Learn to Dive </li>
                </Link>
                <Link href="/shop" >
                    <li className={styles.listItem}>Shop</li>
                </Link>
                <Link href="/overons" >
                    <li className={styles.listItem}>Over Ons</li>
                </Link>
                <Link href="/rental" >
                    <li className={styles.listItem}>Rentals</li>
                </Link>
                <Link href="/service" >
                    <li className={styles.listItem}>Service</li>
                </Link>

                {!session?.user ?
                    <li className={styles.listItem}  onClick={()=>{
                        setTitle('Login'),
                            handleClick('Login')
                    }
                    } >Log In/Register</li>
                    :<>
                         <li className={styles.listItem}>


                        <span onClick={handleLogOut}>

                                    Logout
                                </span>


                    </li>
                    </>}
            </ul>

            <DropDown/>
        </div>
    );
};

export default MainNavigation;
