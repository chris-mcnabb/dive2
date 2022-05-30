// noinspection HtmlUnknownTarget

import styles from '../../styles/admin/Sidebar2.module.css'
import React, {useState} from 'react';
import Link from "next/link"
import Image from "next/image";
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
    NotificationsNone,
    WarningRounded,
    EventOutlined,
    PaymentRounded,
    PinDropOutlined,
    AssignmentOutlined,
    SchoolOutlined,
    LanguageOutlined,
    AvTimerOutlined,
    Dashboard,
    PersonOutline,
    LocalShipping,
    CreditCard,
    Store,
    InsertChart,
    SettingsApplications,
    ExitToApp,
    SettingsSystemDaydreamOutlined,
    PsychologyOutlined,
    AccountCircleOutlined, Badge, CalendarViewMonth, CalendarViewMonthOutlined,
} from "@mui/icons-material";
import logo from "../../public/img/headerlogo.svg";
import {WebOutlined} from "@material-ui/icons";
const Sidebar = () => {
    const [active, setActive] =  useState("")

    const handleClick = (selection) => {
        setActive(selection)
    }
    return (
        <div className={styles.sidebar}>
            <Link href="/">
            <div className={styles.top}>
                <Image src={logo}
                       priority={true}
                       alt=""
                       height="150"
                       width="150"
                       objectFit="contain"
                />

            </div>
            </Link>
            <div className={styles.center}>
                <ul className={styles.ul}>
                    <p className={styles.title}>MAIN</p>
                    <Link href="/admin/">
                        <li className={active === "Home" ? styles.liActive : styles.li} onClick={()=>handleClick("Home")}>
                        <Dashboard className={styles.icon}/>
                        <span className={styles.span}>Dashboard</span>
                    </li>
                    </Link>
                    <p className={styles.title}>BOOK</p>
                        <Link href="/admin/new/lesson">
                            <li className={active === "Lessons" ? styles.liActive : styles.li} onClick={()=>handleClick("Lessons")}>
                                <SchoolOutlined className={styles.icon} />
                                <span className={styles.span}>Nieuw Lesson</span>
                            </li>
                        </Link>
                    <Link href="/admin/new/sale">
                        <li className={active === "newSale" ? styles.liActive : styles.li} onClick={()=>handleClick("newSale")}>
                        <AttachMoney className={styles.icon} />
                        <span  className={styles.span}>New Sale</span>
                    </li>
                    </Link>
                    <li className={styles.li}>
                        <PaymentRounded className={styles.icon}/>
                        <span  className={styles.span}>New Invoice</span>
                    </li>
                    <p className={styles.title}>SCHEDULING</p>
                    <Link href="/admin/calendar">
                        <li className={active === "Calendar" ? styles.liActive : styles.li} onClick={()=>handleClick("Calendar")}>
                            <CalendarViewMonthOutlined className={styles.icon} />
                            <span className={styles.span}>View Calendar</span>
                        </li>
                    </Link>
                    <Link href="/admin/calendar/lessons">
                        <li className={active === "LessonCalendar" ? styles.liActive : styles.li} onClick={()=>handleClick("LessonCalendar")}>
                            <SchoolOutlined className={styles.icon} />
                            <span className={styles.span}>Lessons</span>
                        </li>
                    </Link>
                    <Link href="/admin/calendar/rental">
                        <li className={active === "Rental" ? styles.liActive : styles.li} onClick={()=>handleClick("Rental")}>
                            <AvTimerOutlined className={styles.icon} />
                            <span className={styles.span}>Rental</span>
                        </li>
                    </Link>
                    <Link href="/admin/calendar/service">
                        <li className={active === "Service" ? styles.liActive : styles.li} onClick={()=>handleClick("Service")}>
                            <WarningRounded className={styles.icon}/>
                            <span className={styles.span}>Service</span>
                        </li>
                    </Link>

                    <li  className={styles.li}>
                        <NotificationsNone   className={styles.icon}/>
                        <span  className={styles.span}>Notifications</span>
                    </li>

                    <p className={styles.title}>LISTS</p>
                    <Link href="/admin/sales">
                        <li className={active === "Sales" ? styles.liActive : styles.li} onClick={()=>handleClick("Sales")}>
                            <TrendingUp className={styles.icon}/>
                            <span className={styles.span}>Sales</span>
                        </li>
                    </Link>
                    <Link href="/admin/users/customer">
                        <li className={active === "Customer" ? styles.liActive : styles.li} onClick={()=>handleClick("Customer")}>
                        <PersonOutline  className={styles.icon}/>
                        <span  className={styles.span}>Customers</span>
                    </li>
                    </Link>
                        <Link href="/admin/users/employee">
                            <li className={active === "Employee" ? styles.liActive : styles.li} onClick={()=>handleClick("Employee")}>
                        <Badge className={styles.icon}/>
                        <span  className={styles.span}>Instructors/Employees</span>
                    </li>
                        </Link>
                    <Link href="/admin/products">
                        <li className={active === "Product" ? styles.liActive : styles.li} onClick={()=>handleClick("Product")}>
                        <Store className={styles.icon}/>
                        <span  className={styles.span}>Products</span>
                    </li>
                    </Link>
                    <Link href="/admin/orders">
                    <li className={active === "Order" ? styles.liActive : styles.li} onClick={()=>handleClick("Order")}>
                        <CreditCard   className={styles.icon}/>
                        <span  className={styles.span}>Orders</span>
                    </li>
                    </Link>
                    <li className={styles.li}>
                        <WarningRounded className={styles.icon}/>
                        <span  className={styles.span}>Service</span>
                    </li>
                    <p className={styles.title}>SITE</p>
                    <Link href="/admin/maintenance">
                        <li className={active === "Maintenance" ? styles.liActive : styles.li} onClick={()=>handleClick("Maintenance")}>
                        <WebOutlined   className={styles.icon}/>
                        <span  className={styles.span}>Maintenance</span>
                    </li>
                    </Link>
                    <p className={styles.title}>USER</p>

                    <li  className={styles.li}>
                        <AccountCircleOutlined   className={styles.icon}/>
                        <span  className={styles.span}>Profile</span>
                    </li>
                    <li  className={styles.li}>
                        <ExitToApp   className={styles.icon}/>
                        <span  className={styles.span}>Logout</span>
                    </li>

                </ul>
            </div>

        </div>
    );
};

export default Sidebar;
