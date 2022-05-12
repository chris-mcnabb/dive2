import React from 'react';
import Dates from "../../../components/admin/Dates";
import styles from '../../../styles/admin/Calendar.module.css'
import {useRouter} from "next/router";

const GroupCalendar = () => {
    const router = useRouter()
    const {id} = router.query
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>{id[0].toUpperCase() + id.substring(1)} Calendar</h1>
            <div className={styles.wrapper}>
                <Dates/>
            </div>

        </div>
    );
};

export default GroupCalendar;
GroupCalendar.layout = "L2";
