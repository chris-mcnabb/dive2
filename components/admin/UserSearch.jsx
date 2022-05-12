import {useState} from 'react';
import styles from "../../styles/admin/UserSearch.module.css"
import {AvTimerOutlined, PersonOutline, SchoolOutlined, Store, TrendingUp, WarningRounded} from "@mui/icons-material";
import Link from 'next/link'
import {useRouter} from "next/router";
import useToggle from "../hooks/useToggle";
const UserSearch = ({setShowModal, users, setCriteria, criteria, client, setClient,  setNewSale}) => {
    const [searchScreen, setSearchScreen] = useToggle()

    const router = useRouter()
    const handleClick = () => {
        setShowModal()
       setNewSale()
    }
    const handleSearch = (e) => {
        e.preventDefault()
        console.log('this criteria', criteria)
        if(criteria.phone){
            users.map((data)=>{
                if(data.personal.phone==criteria.phone){
                    setClient(data)
                    setSearchScreen()
                }
            })
        }
        if(criteria.email){
            users.map((data)=>{
                if(data.personal.email==criteria.email){
                    setClient(data)
                    setSearchScreen()
                }
            })
        }
        //setSearchScreen()
    }

console.log(criteria)
    return (
        <>
        {!searchScreen && <div className={styles.wrapper}>
        <h2 className={styles.h2}>Find Customer</h2>
        <div className={styles.selection}>
            <div className={styles.search}>
                <input className={styles.input} type="text" name='phone' placeholder='phone number' onChange={(e)=>setCriteria({[e.target.name]: e.target.value})}/>
            </div>
            <div className={styles.search}>
                <input  className={styles.input} type="text" name='email' placeholder='email' onChange={(e)=>setCriteria({[e.target.name]: e.target.value})}/>
            </div>
        </div>
            <div className={styles.buttonContainer}>
                <button className={styles.cancelButton} onClick={()=>setShowModal()}>Cancel</button>
                <button className={styles.searchButton} onClick={handleSearch}>Find</button>
            </div>
    </div>}
            {searchScreen &&
                <>
                    { client ?  <div className={styles.wrapper}>
                <h2 className={styles.h2}>Match</h2>
                <div className={styles.selection}>
                   <div className={styles.name}>
                       <span className={styles.name}>Naam: {client.firstName}</span>
                       <span className={styles.name}>{client.lastName}</span>
                   </div>
                        <span>Email: {client.personal.email}</span>
                        <span>Phone: {client.personal.phone}</span>

                    <button className={styles.searchButton}  onClick={handleClick}>Select</button>

                </div>
                </div> : <div className={styles.wrapper}>
                        <div className={styles.selection}>

                            <h2 className={styles.h2}>No user found</h2>
                            <Link href='/admin/new/user'>
                                <button className={styles.searchButton} >Create Customer</button>
                            </Link>


                        </div>
                    </div>}
                </>}

        </>
    );
};

export default UserSearch;
