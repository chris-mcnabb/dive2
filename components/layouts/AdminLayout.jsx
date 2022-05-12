import React from 'react';
import Sidebar2 from "../admin/Sidebar2";

import styles from "./Layout.module.css"
import AdminNavbar2 from "../admin/AdminNavbar2";

const Layout = ({children}) => {
    return (
        <div className={styles.container}>
           <Sidebar2/>
            <div className={styles.lowerContainer}>
                <AdminNavbar2/>
            {children}

            </div>
        </div>
    );
};

export default Layout;
