import styles from '../styles/website/Register.module.css'
import {CountryDropdown} from "react-country-region-selector";
import {useState} from "react";

const Register = () => {
    const [section, setSection] = useState('')
    const [showPicture, setShowPicture] = useState(false)
    const [inputs, setInputs] = useState({});
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState({});
    const [personal, setPersonal] = useState({})
    const [certification, setCertification] = useState({})
    const [hire, setHire] = useState({})
    const [username, setUsername] = useState('')
    const [file, setFile] = useState(null)
    const [country, setCountry] = useState({country: 'NL'})
    const handleClick = () => {

    }
    const selectCountry = (val) => {
        setCountry({country: val})
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}> CREATE ACCOUNT</h1>

                <form className={styles.form}>

                       <input className={styles.input} placeholder="voornaam" onChange={(e)=>setUsername(e.target.value)}/>
                       <input className={styles.input} placeholder="achternaam" onChange={(e)=>setUsername(e.target.value)}/>

                        <input className={styles.input} placeholder="username" onChange={(e)=>setUsername(e.target.value)}/>
                        <input className={styles.input} placeholder="email" onChange={(e)=>setUsername(e.target.value)}/>

                        <input className={styles.input} placeholder="password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
                        <input className={styles.input} placeholder="repeat password" type="password" onChange={(e)=>setPassword(e.target.value)}/>

                           <input className={styles.input} placeholder="phone" onChange={(e)=>setUsername(e.target.value)}/>
                           <CountryDropdown
                               value={country.country}
                               labelType='short'
                               valueType='short'
                               defaultOptionLabel={country.country}
                               className={styles.input}
                               style={{width: '21%'}}
                               priorityOptions={['NL', 'DE', 'BE']}
                               onChange={(val)=>selectCountry(val)} />

                        <input className={styles.input} placeholder="address" type="password" onChange={(e)=>setPassword(e.target.value)}/>
                        <input className={styles.input} placeholder="city" type="password" onChange={(e)=>setPassword(e.target.value)}/>

                    {country.country === 'US' ?
                        <>
                            <input className={styles.input} placeholder="state" type="password"
                                   onChange={(e) => setPassword(e.target.value)}/>
                            <input className={styles.input} placeholder="zip code" type="password" onChange={(e)=>setPassword(e.target.value)}/>
                        </>
                  :  <input className={styles.input2} placeholder="postal code" type="password" onChange={(e)=>setPassword(e.target.value)}/>}


                </form>
                <div>
                    <button className={styles.button} onClick={handleClick} >REGISTER</button>
                </div>
            </div>
        </div>
    );
};

export default Register;
Register.layout = "L3";
