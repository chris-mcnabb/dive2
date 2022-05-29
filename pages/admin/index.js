import React, {useEffect, useState} from 'react';
import styles from "../../styles/admin/Admin.module.css"
import AdminNavbar from "../../components/admin/AdminNavbar";
import Sidebar from "../../components/admin/Sidebar";
import FeaturedInfo from "../../components/admin/FeaturedInfo";
import { useSession, getSession} from "next-auth/react"
import {getToken} from "next-auth/jwt";
import WidgetSm from "../../components/admin/WidgetSm";
import WidgetLg from "../../components/admin/WidgetLg";
import Chart2 from "../../components/admin/Chart2";
import {useRouter} from "next/router";

const AdminHome = ({session, token}) => {


    const router = useRouter()

       return(


           <div className={styles.container}>
               <div className={styles.wrapper}>
                   <FeaturedInfo/>
                   <Chart2/>
                   <div className={styles.widgetContainer}>
                       <WidgetSm/>
                       <WidgetLg/>
                   </div>
               </div>
           </div>


    )




};

export default AdminHome;
AdminHome.layout = "L2";
export async function getServerSideProps(context) {
    return {
        props: {
            session: await getSession(context),
            token: await getToken(context)
        },
    }
}
