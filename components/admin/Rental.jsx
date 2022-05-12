import React from 'react';
import styles from "../../styles/admin/NewUser.module.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import {
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { format } from "date-fns";

const Rental = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h1 className={styles.h1}>
                    New Rental
                    <div className={styles.headerSearch}>


                    </div>
                </h1>
            </div>
            Rental
        </div>
    );
};

export default Rental;
