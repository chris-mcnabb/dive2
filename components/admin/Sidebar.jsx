import {useState} from 'react';
import Link from "next/link"
import styles from "../../styles/admin/Sidebar.module.css"
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
    WarningRounded,
    EventOutlined,
    PaymentRounded,
    PinDropOutlined,
    AssignmentOutlined,
    SchoolOutlined,
    LanguageOutlined,
    AvTimerOutlined
} from "@mui/icons-material";
const Sidebar = () => {

    const [active, setActive] =  useState("")

    const handleClick = (selection) => {
        setActive(selection)
    }
    return (
        <div className={styles.container}>
            <div className={styles.sidebarWrapper}>
                <div className={styles.sidebarMenu}>
                    <h3 className={styles.sidebarTitle}>Dashboard</h3>
                    <ul className={styles.sidebarList}>

                        <Link href="/admin">
                            <li className={active == "Home" ? styles.sidebarListItemActive : styles.sidebarListItem} onClick={()=>handleClick("Home")}>
                                <LineStyle className={styles.sidebarIcon} />
                                Home
                            </li>
                        </Link>
                        <Link href="/admin/lessons">
                            <li className={active == "Lessons" ? styles.sidebarListItemActive : styles.sidebarListItem} onClick={()=>handleClick("Lessons")}>
                            <SchoolOutlined className={styles.sidebarIcon} />
                            Lessons
                        </li>
                        </Link>
                        <Link href="/admin/sales">
                        <li className={active == "Sales" ? styles.sidebarListItemActive : styles.sidebarListItem} onClick={()=>handleClick("Sales")}>
                            <TrendingUp className={styles.sidebarIcon}/>
                            Sales
                        </li>
                        </Link>
                    </ul>
                </div>
                <div className={styles.sidebarMenu}>
                    <h3 className={styles.sidebarTitle}>Operations</h3>
                    <ul className={styles.sidebarList}>

                        <li className={styles.sidebarListItem}>
                            <PermIdentity className={styles.sidebarIcon}/>
                            Customers
                        </li>
                        <li className={styles.sidebarListItem}>
                            <PaymentRounded className={styles.sidebarIcon}/>
                            Invoicing
                        </li>
                        <li className={styles.sidebarListItem}>
                            <Storefront className={styles.sidebarIcon} />
                            Products
                        </li>
                        <li className={styles.sidebarListItem}>
                            <SchoolOutlined className={styles.sidebarIcon}/>
                            Lessons
                        </li>
                        <li className={styles.sidebarListItem}>
                            <WarningRounded className={styles.sidebarIcon}/>
                             Service
                        </li>
                        <li className={styles.sidebarListItem}>
                            <AttachMoney className={styles.sidebarIcon} />
                            Store Sales
                        </li>
                        <li className={styles.sidebarListItem}>
                            <AvTimerOutlined className={styles.sidebarIcon} />
                            Rentals
                        </li>
                        <li className={styles.sidebarListItem}>
                            <BarChart className={styles.sidebarIcon} />
                            Reports
                        </li>
                        <li className={styles.sidebarListItem}>
                            <EventOutlined className={styles.sidebarIcon} />
                            Tasks
                        </li>
                        <li className={styles.sidebarListItem}>
                            <PinDropOutlined className={styles.sidebarIcon} />
                            Dive Trips
                        </li>
                    </ul>
                </div>
                <div className={styles.sidebarMenu}>
                    <h3 className={styles.sidebarTitle}>Notifications</h3>
                    <ul className={styles.sidebarList}>
                        <li className={styles.sidebarListItem}>
                            <MailOutline className={styles.sidebarIcon} />
                            Mail
                        </li>
                        <li className={styles.sidebarListItem}>
                            <DynamicFeed className={styles.sidebarIcon} />
                            Feedback
                        </li>
                        <li className={styles.sidebarListItem}>
                            <ChatBubbleOutline className={styles.sidebarIcon}/>
                            Messages
                        </li>
                    </ul>
                </div>
                <div className={styles.sidebarMenu}>
                    <h3 className={styles.sidebarTitle}>Staff</h3>
                    <ul className={styles.sidebarList}>
                        <li className={styles.sidebarListItem}>
                            <PermIdentity className={styles.sidebarIcon}/>
                            Employees
                        </li>
                        <li className={styles.sidebarListItem}>
                            <WorkOutline className={styles.sidebarIcon}/>
                            Manage
                        </li>
                        <li className={styles.sidebarListItem}>
                            <Timeline className={styles.sidebarIcon} />
                            Analytics
                        </li>
                        <li className={styles.sidebarListItem}>
                            <Report className={styles.sidebarIcon} />
                            Reports
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
