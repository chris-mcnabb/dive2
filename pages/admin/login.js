import {useState} from 'react';
import styles from "../../styles/website/Login.module.css"
import Link from "next/link"
import {signIn} from "next-auth/react";
import {useRouter} from "next/router";
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()
    const handleClick = async (e) => {
        e.preventDefault()
        try{
            const res = await signIn('credentials', {
                redirect: false,
                username:  username,
                password:   password,
            });
            console.log(res.error)
            !res.error && router.push('/admin')
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>SIGN IN</h1>
                <form className={styles.form}>

                    <input className={styles.input} placeholder="username" onChange={(e)=>setUsername(e.target.value)}/>
                    <input className={styles.input} placeholder="password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
                    <button className={styles.button} onClick={handleClick} >LOGIN</button>

                </form>
            </div>
        </div>
    );

};

export default Login;
Login.layout = "L3";
