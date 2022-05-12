
import styles from "../../styles/website/Login.module.css";
import Link from "next/link";
import {signIn} from "next-auth/react";
import {useRouter} from "next/router";
import React, {useState} from 'react';
import useToggle from "../hooks/useToggle";
import {useDispatch} from "react-redux";
import axios from "axios";
import {getSession} from "next-auth/react";
import {retrieveCart} from "../../redux/apiCalls";
import {useSelector} from "react-redux";

const Login = ({showModal, setShowModal, location}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const [showError, setShowError] =useToggle()
    const cart = useSelector(state=>state.cart)
    const router = useRouter()
    const dispatch = useDispatch()
    const handleClick = async (e) => {

        e.preventDefault()
        if(showError){
            setError('')
            setShowError()
        }
        try{
            const res = await signIn('credentials', {
                redirect: false,
                username:  username,
                password:   password,
            });

           if(res.error){
               setError(res.error)
               setShowError()
           }else if(res.ok){
               const session = await getSession()
               retrieveCart(dispatch, session, cart)
               if(location === 'home'){
                   router.push('/')
               }
               if(location === 'checkout'){
                   router.push(`/cart/${cart.cartId}`)
               }
               setShowModal()

           }
        }catch(err){
            console.log(err)
        }
    }
    const handleRegister = () => {
        setShowModal()
        router.push('/register')
    }
    console.log(showError)
    return (
        <div className={styles.wrapper}>
            <div className={styles.close} onClick={(()=>setShowModal())}>
                 <span>
                  X
              </span>
            </div>
            <h1 className={styles.title}>SIGN IN</h1>
            <form className={styles.form}>

                <input className={styles.input} placeholder="username" onChange={(e)=>setUsername(e.target.value)}/>
                <input className={styles.input} placeholder="password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
                <button className={styles.button} onClick={handleClick} >LOGIN</button>
                {showError && <span className={styles.error}>{error}</span>}
                <div className={styles.options}>
                    <span>Forgot Password</span>
                    <span>Forgot Username</span>

                        <span onClick={handleRegister}>Create A New Account</span>

                </div>
            </form>
        </div>
    );
};

export default Login;
