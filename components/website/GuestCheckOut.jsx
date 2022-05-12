import React from 'react';
import styles from "../../styles/website/Login.module.css";
import useToggle from "../hooks/useToggle";

const GuestCheckOut = ({handleClick, setShowModal}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.close} onClick={(()=>setShowModal())}>
                 <span>
                  X
              </span>
            </div>
            <h1 className={styles.title}>SIGN IN</h1>
            <form className={styles.form}>

                <input className={styles.input} placeholder="username" />
                <input className={styles.input} placeholder="password" type="password" />
                <button className={styles.button} onClick={handleClick} >LOGIN</button>
                <h2>OR</h2>
                <button className={styles.button} onClick={handleClick} >CHECKOUT AS GUEST</button>

                <div className={styles.options}>
                    <span>Forgot Password</span>
                    <span>Forgot Username</span>

                    <span >Create A New Account</span>

                </div>
            </form>
        </div>
    );
};

export default GuestCheckOut;
