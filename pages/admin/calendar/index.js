import React from 'react';
import Dates from "../../../components/admin/Dates";
import styles from '../../../styles/admin/Calendar.module.css'
const Calendar = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Calendar</h1>
            <div className={styles.wrapper}>
                <Dates/>
            </div>

        </div>
    );
};

export default Calendar;
Calendar.layout = "L2";
