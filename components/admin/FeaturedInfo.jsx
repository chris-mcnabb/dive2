import styles from "../../styles/admin/FeaturedInfo.module.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import {useEffect, useState} from "react";
import Link from "next/link"


export default function FeaturedInfo() {
    const [income, setIncome] = useState([]);
    const [percentage, setPercentage] = useState(0);




    return (
        <div className={styles.featured}>
            <Link href="/admin/revenue">
            <div className={styles.featuredItem}>
                <span className={styles.featuredTitle}>Revenue</span>
                <div className={styles.featuredMoneyContainer}>
                    <span className={styles.featuredMoney}>€5000</span>
                    <span className={styles.featuredMoneyRate}>
            {Math.floor(percentage)}%{" "}
                        {percentage < 0 ? ( <ArrowDownward  className={styles.negativeIcon}/>)
                            : (<ArrowUpward className={styles.featuredIcon}/>)
                        }

          </span>
                </div>
                <span className={styles.featuredSub}>Compared to last month</span>
            </div>
        </Link>
            <Link href="/admin/sales">
            <div className={styles.featuredItem}>
                <span className={styles.featuredTitle}>Sales</span>
                <div className={styles.featuredMoneyContainer}>
                    <span className={styles.featuredMoney}>€4,415</span>
                    <span className={styles.featuredMoneyRate}>
            -1.4 <ArrowDownward className={styles.negativeIcon}/>
          </span>
                </div>
                <span className={styles.featuredSub}>Compared to last month</span>
            </div>
            </Link>
            <Link href="/admin/lessons">
            <div className={styles.featuredItem}>
                <span className={styles.featuredTitle}>Lessons</span>
                <div className={styles.featuredMoneyContainer}>
                    <span className={styles.featuredMoney}>27</span>
                    <span className={styles.featuredMoneyRate}>
            +2.4 <ArrowUpward className={styles.featuredIcon}/>
          </span>
                </div>
                <span className={styles.featuredSub}>Compared to last month</span>
            </div>
            </Link>
        </div>
    );
}
