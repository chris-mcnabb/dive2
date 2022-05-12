import styles from "../../styles/admin/WidgetSm.module.css";
import { Visibility } from "@material-ui/icons";
import {useEffect, useState} from "react";
import Image from "next/image"
import avatar from "../../public/img/user.png"

export default function WidgetSm() {
    const [users, setUsers] = useState([]);
    useEffect(() =>{
        const getUsers = async  () => {
            try{
                const res = await userRequest.get("users/?new=true")
                setUsers(res.data)
            }catch(err){}
        }
        getUsers()
    },[])
    return (
        <div className={styles.container}>
            <span className={styles.widgetSmTitle}>New Students</span>
            <ul className={styles.widgetSmList}>

                    <li className={styles.widgetSmListItem} key={2}>
                        <Image
                            src={avatar}
                            alt=""
                            height={40}
                            width={40}
                            objectFit="cover"
                            className={styles.widgetSmImg}
                        />
                        <div className={styles.widgetSmUser}>
                            <span className={styles.widgetSmUsername}>Rein</span>

                        </div>
                        <button className={styles.widgetSmButton}>
                            <Visibility className={styles.widgetSmIcon} />
                            Display
                        </button>
                    </li>



            </ul>
        </div>
    );
}
