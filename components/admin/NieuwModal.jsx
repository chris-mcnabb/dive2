import React from 'react';
import styles from "../../styles/Modal.module.css"
import {AvTimerOutlined, PersonOutline, SchoolOutlined, Store, TrendingUp, WarningRounded} from "@mui/icons-material";
import Link from 'next/link'
import {useRouter} from "next/router";

const NieuwModal = ({handleClick, setShowModal}) => {
    return (
        <div className={styles.wrapper}>
              <span onClick={(()=>setShowModal())} className={styles.close}>
                  X
              </span>
            <h1 className={styles.h1}>Select</h1>
            <div className={styles.selection}>

                <ul className={styles.ul}>
                    <li className={styles.li} name='sale' onClick={()=>handleClick('sale')}>
                        <TrendingUp className={styles.icon}/>
                        <span className={styles.span}>New Sale</span>
                    </li>
                    <li className={styles.li} name='user' onClick={()=>handleClick('user')}>
                        <PersonOutline  className={styles.icon}/>
                        <span className={styles.span}>New User</span>
                    </li>
                    <li className={styles.li} value='product' onClick={()=>handleClick('product')}>
                        <Store className={styles.icon}/>
                        <span  className={styles.span}>New Product</span>
                    </li>
                    <li className={styles.li}  onClick={()=>handleClick('service')}>
                        <WarningRounded className={styles.icon}/>
                        <span className={styles.span}>Book Service</span>
                    </li>
                    <li className={styles.li}  onClick={()=>handleClick('rental')}>
                        <AvTimerOutlined className={styles.icon} />
                        <span className={styles.span}>Book Rental</span>
                    </li>
                    <li className={styles.li}  onClick={()=>handleClick('lesson')}>
                        <SchoolOutlined className={styles.icon} />
                        <span className={styles.span}>Book Lesson</span>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default NieuwModal;
