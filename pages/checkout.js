import {loadStripe} from "@stripe/stripe-js";
import {useEffect, useState} from 'react';
import Head from "next/head";
import {Elements} from "@stripe/react-stripe-js";
import Script from "next/script";
import CheckoutForm from '../components/checkout/CheckoutForm'
import axios from "axios";
import styles from "../styles/Checkout.module.css";
import {getSession} from "next-auth/react";
import {useSelector, useDispatch} from "react-redux";
import useToggle from "../components/hooks/useToggle";
import {updateOrder} from "../redux/apiCalls";
const stripe =  loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
const Checkout = () => {

    const cart = useSelector(state=>state.cart);
    const [clientSecret, setClientSecret] = useState('');
    const [paymentIntent, setPaymentIntent] = useState('')
    const [success, setSuccess] = useToggle()

    const dispatch = useDispatch();
    useEffect(() => {
        const newIntent = async() => {
            try {
                const res = await axios.post('/api/stripe/stripe_intent', {
                    headers: {'Content-Type': 'application/json'},
                    amount: Math.round((cart.total + cart.shipping.shippingCost) * 100),
                    items: cart,
                    payment_intent_id: '',
                })

                setClientSecret( res.data.client_secret),
                    setPaymentIntent(res.data.id)

            } catch (err) {
                console.log(err)
            }
        }
        newIntent()
    },[]);
    useEffect(() =>{
        const finalizeOrder = async() => {
            const session = await getSession()
            if(cart.processed === 'succeeded'){
                console.log('process', cart.processed)
                await updateOrder(dispatch, session, cart.cartId, cart)
                //setSuccess()
            }
        }
        finalizeOrder()
    },[cart.processed === 'succeeded'])

    const appearance = {
        theme: 'flat',
        labels: 'floating',
    };
    const options = {
        clientSecret,
        appearance,

    };
console.log('cart', cart)
    return (
        <div className={styles.container}>

            {success && <h1>Order Number: {cart.cartId}</h1>}
            <Head>
                <Script src="https://js.stripe.com/v3" async></Script>
            </Head>
            {!success &&
                <>
                <h1>Total: €{(cart.total + cart.shipping.shippingCost).toFixed(2)}</h1>
            <div className={styles.formContainer}>


              {clientSecret && (
                    <Elements options={options} stripe={stripe}>
                        <CheckoutForm total={cart.total} paymentIntent={paymentIntent}/>
                    </Elements>
                )}

            </div>
                </>  }
        </div>
    );
};

export default Checkout;
Checkout.layout = "L3";
