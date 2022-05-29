import React from 'react';
import styles from "../styles/Modal.module.css"
import {AvTimerOutlined, PersonOutline, SchoolOutlined, Store, TrendingUp, WarningRounded} from "@mui/icons-material";
import Link from 'next/link'
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from './checkout/CheckoutForm'
import {useRouter} from "next/router";
import NieuwModal from "./admin/NieuwModal";

import CartSummary from "./website/CartSummary";
import ImageModal from "./website/ImageModal";
import UserSearch from "./admin/UserSearch";
import Login from "./website/Login";
import GuestCheckOut from "./website/GuestCheckOut";


const Modal = ({showModal, setShowModal, title, location, cart, img, pic, users, criteria, setCriteria, client, setClient, clientSecret, newSale, setNewSale, product, size, color, shipping, amount, paymentIntent, quantity}) => {
    const router = useRouter();

    const handleClick = (value) => {
        console.log(value)
        setShowModal()
        if(title==='Nieuw'){
            router.push(`/admin/new/${value}`)
        }

    }

    return (
      <>
          {showModal &&
                <div className={styles.container} >
                    {title === 'Nieuw' && <NieuwModal handleClick={handleClick} setShowModal={setShowModal}/>}
                    {title === 'Guest' && <GuestCheckOut handleClick={handleClick} setShowModal={setShowModal}/>}

                    {title === 'Login' && <Login handleClick={handleClick} location={location} showModal={showModal} setShowModal={setShowModal} />}
                    {title === 'Cart' && <CartSummary quantity={quantity} size={size} color={color} showModal={showModal} setShowModal={setShowModal} product={product} img={img}/>}
                    {title === 'Photo' && <ImageModal  showModal={showModal} setShowModal={setShowModal} img={img} pic={pic}/>}
                    {title === 'FindUser' && <UserSearch newSale={newSale} setNewSale={setNewSale} client={client} setClient={setClient}  showModal={showModal} setShowModal={setShowModal} users={users}  criteria={criteria} setCriteria={setCriteria}/>}
                </div>
          }
      </>
    );
};

export default Modal;
