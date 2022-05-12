import React, {useState, useEffect} from 'react';
import {DeleteOutline} from '@mui/icons-material'
import styles from "../styles/website/Cart.module.css";
import Image from "next/image";
import mask from '../public/img/WEB-Zensee-Pro-M1010S-QBA.jpg'
import logo from "../public/img/headerlogo.svg";
import axios from 'axios';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import {getSession} from "next-auth/react";
import CheckoutForm from '../components/checkout/CheckoutForm'
import Modal from "../components/Modal";
const Cart = ({newKey}) => {
    const [user, setUser] = useState(false)
    const [publishableKey, setPublishableKey] = useState(newKey)
    const [clientSecret, setClientSecret] = useState('');
    const [paymentIntent, setPaymentIntent] = useState('');
    const [showModal, setShowModal] = useState(false)
    const [title, setTitle] = useState('')

    useEffect(()=>{
        const newIntent = async() =>{
            try{
                const res = await axios.post('/api/stripe/stripe_intent',{
                    headers:{'Content-Type': 'application/json'},
                    amount: 30000,
                    payment_intent_id: '',

                })
                console.log(res.data)
                setClientSecret(res.data.client_secret),
                    setPaymentIntent(res.data.id)
            }catch(err){
                console.log(err)
            }
        }
        newIntent()
    },[])

    const appearance = {
        theme: 'stripe',
        labels: 'floating',
    };
    const options = {
        clientSecret,
        appearance,
    };

    if(!publishableKey){
        return 'Loading...';
    }
    const stripe = loadStripe(publishableKey)
    console.log('key', showModal)
    return (
        <div className={styles.container}>
            <Modal showModal={showModal} setShowModal={setShowModal} title={'Pay'} options={options} stripe={stripe} paymentIntent={paymentIntent}/>
            <div className={styles.header}>
                <div className={styles.img}>
                    <Image src={logo} alt="" height={100} width={200} objectFit="contain"/>
                </div>
                <h1>WinkelWagen</h1>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <div className={styles.product}>
                        <div className={styles.productDetail}>
                            <Image src={mask} alt='' height={200} width={200} objectFit='contain'/>
                            <div className={styles.details}>
                                <span><b>Name:</b> Tusa Zensee Pro Mask</span>
                                <span><b>ID:</b> M1010S</span>
                                <span><b>Color:</b> Black</span>
                                <span><b>Size:</b> Unisex</span>
                            </div>
                        </div>
                        <div className={styles.priceDetail}>
                            <div className={styles.productAmountContainer}>
                                <input type="number"defaultValue={1} min={1} className={styles.quantity}/>
                            </div>
                            <div className={styles.productPrice}>
                                €159.00
                            </div>
                            <div className={styles.trashcan}>
                                <DeleteOutline />

                            </div>

                        </div>

                    </div>
                    <div className={styles.product}>
                        <div className={styles.productDetail}>
                            <Image src={mask} alt='' height={200} width={200} objectFit='contain'/>
                            <div className={styles.details}>
                                <span><b>Name:</b> Tusa Zensee Pro Mask</span>
                                <span><b>ID:</b> M1010S</span>
                                <span><b>Color:</b> Black</span>
                                <span><b>Size:</b> Unisex</span>

                            </div>

                        </div>

                        <div className={styles.priceDetail}>
                            <div className={styles.productAmountContainer}>
                                <input type="number"defaultValue={1} className={styles.quantity}/>
                            </div>
                            <div className={styles.productPrice}>
                                €159.00
                            </div>
                            <div className={styles.trashcan}>
                                <DeleteOutline />
                                <span style={{marginLeft: 10}}>Delete Item</span>
                            </div>

                        </div>
                    </div>
                    <div className={styles.product}>
                        <div className={styles.productDetail}>
                            <Image src={mask} alt='' height={200} width={200} objectFit='contain'/>
                            <div className={styles.details}>
                                <span><b>Name:</b> Tusa Zensee Pro Mask</span>
                                <span><b>ID:</b> M1010S</span>
                                <span><b>Color:</b> Black</span>
                                <span><b>Size:</b> Unisex</span>

                            </div>

                        </div>

                        <div className={styles.priceDetail}>
                            <div className={styles.productAmountContainer}>
                                <input type="number"defaultValue={1} className={styles.quantity}/>
                            </div>
                            <div className={styles.productPrice}>
                                €159.00
                            </div>
                            <div className={styles.trashcan}>
                                <DeleteOutline />
                                <span style={{marginLeft: 10}}>Delete Item</span>
                            </div>

                        </div>
                    </div>
                    <div className={styles.product}>
                        <div className={styles.productDetail}>
                            <Image src={mask} alt='' height={200} width={200} objectFit='contain'/>
                            <div className={styles.details}>
                                <span><b>Name:</b> Tusa Zensee Pro Mask</span>
                                <span><b>ID:</b> M1010S</span>
                                <span><b>Color:</b> Black</span>
                                <span><b>Size:</b> Unisex</span>

                            </div>

                        </div>

                        <div className={styles.priceDetail}>
                            <div className={styles.productAmountContainer}>
                                <input type="number"defaultValue={1} className={styles.quantity}/>
                            </div>
                            <div className={styles.productPrice}>
                                €159.00
                            </div>
                            <div className={styles.trashcan}>
                                <DeleteOutline />
                                <span style={{marginLeft: 10}}>Delete Item</span>
                            </div>

                        </div>
                    </div>
                    <hr className={styles.hr}/>
                </div>
                <div className={styles.right}>
                    <h1 className={styles.h1Summary}>Order Summary</h1>
                    <div className={styles.summary}>
                        <span className={styles.summaryText}>Subtotal</span>
                        <span className={styles.summaryPrice}>€200.00</span>
                    </div>
                    <div className={styles.summary}>
                        <span className={styles.summaryText}>Estimated Shipping</span>
                        <span className={styles.summaryPrice}>€10.00</span>
                    </div>
                    <div className={styles.summary}>
                        <span className={styles.summaryText}>Discount</span>
                        <span className={styles.summaryPrice}>€0.00</span>
                    </div>
                    <div className={styles.summary}>
                        <span className={styles.summaryText}>Tax</span>
                        <span className={styles.summaryPrice}>€42.00</span>
                    </div>
                    <div className={styles.summary}>
                        <span className={styles.summaryText}>Coupon Code</span>
                        <input className={styles.coupon} type='text' placeholder={'Enter Code...'}/>
                    </div>
                    <div className={styles.summary}>
                        <h2>TOTAL:</h2>
                        <h2>€210.00</h2>
                    </div>
                    <div className={styles.buttonContainer}>

                        {clientSecret && <button onClick={()=>setShowModal(true)}>test</button>}

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Cart;
Cart.layout = "L3";
export const getServerSideProps = async () =>{

    try{

        const res = await axios.get('http://localhost:3000/api/stripe/keys',{
            headers: {'Content-Type': 'application/json'},
        })
        return{
            props: {
                newKey: res.data.publishableKey
            }
        }

    }catch(err){

    }




};
