import  {useState} from 'react';
import styles from "../../styles/website/Login.module.css";
import useToggle from "../hooks/useToggle";
import {CountryDropdown} from "react-country-region-selector";
import axios from "axios";
import {useRouter} from "next/router";
import {newGuest} from "../../redux/apiCalls";
import {useDispatch} from "react-redux";

const GuestCheckOut = ({handleClick, setShowModal}) => {
    const dispatch = useDispatch()
    const router = useRouter()
    const [section, setSection] = useState('')
    const [showPicture, setShowPicture] = useState(false)

    const [inputs, setInputs] = useState({});
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [address, setAddress] = useState({});
    const [personal, setPersonal] = useState({})
    const [passError, setPassError] = useState(false)
    const [hire, setHire] = useState({})
    const [username, setUsername] = useState('')
    const [file, setFile] = useState(null)
    const [country, setCountry] = useState({country: 'NL'})
    const selectCountry = (val) => {
        setCountry({country: val})
    };
    const handleChange = (e) => {

        setInputs(prev=>{
            return {...prev, [e.target.name]: e.target.value}
        })

    };

    const handleCreate =   async (e) => {
        e.preventDefault()
await newGuest(dispatch,  {...inputs, country: country.country})
        setShowModal()
    }


    return (
        <div className={styles.wrapper}>
            <div className={styles.close} onClick={(()=>setShowModal())}>
                 <span>
                  X
              </span>
            </div>
            <h1 className={styles.title}>ENTER SHIPPING INFORMATION</h1>
            <form className={styles.form}>

                <input className={styles.input} name='firstName' placeholder="voornaam" onChange={handleChange}/>
                <input className={styles.input} name='lastName' placeholder="achternaam" onChange={handleChange}/>
                <input className={styles.input} placeholder="email" name='email' onChange={handleChange}/>
                <input className={styles.input} placeholder="phone" name='phone' onChange={handleChange}/>
                <CountryDropdown
                    value={country.country}
                    labelType='short'
                    valueType='short'
                    defaultOptionLabel={country.country}
                    className={styles.input}
                    style={{width: '21%'}}
                    priorityOptions={['NL', 'DE', 'BE']}
                    onChange={(val)=>selectCountry(val)} />

                <input className={styles.input} placeholder="address" name='address' type="text" onChange={handleChange}/>
                <input className={styles.input} placeholder="city" name='city' type="text" onChange={handleChange}/>

                {country.country === 'US' ?
                    <>
                        <input className={styles.input} placeholder="state" name='state' type="text"
                               onChange={handleChange}/>
                        <input className={styles.input} placeholder="zip code" name='zip code' type="password" onChange={handleChange}/>
                    </>
                    :  <input className={styles.input} placeholder="postal code" name='postalCode' type="text" onChange={handleChange}/>}

                <button className={styles.button} onClick={handleCreate} >CONTINUE</button>


            </form>
        </div>
    );
};

export default GuestCheckOut;
