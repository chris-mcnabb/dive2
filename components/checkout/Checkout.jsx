import {loadStripe} from "@stripe/stripe-js";
import {useEffect, useState} from 'react';
import Head from "next/head";
import {Elements} from "@stripe/react-stripe-js";
import Script from "next/script";
import CheckoutForm from './CheckoutForm'
import axios from "axios";
import styles from "../../styles/CheckoutForm.module.css";
const stripe =  loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
const Checkout = ({cart}) => {
    const [clientSecret, setClientSecret] = useState('');
    const [paymentIntent, setPaymentIntent] = useState('')
    useEffect(() => {
        const newIntent = async() => {
            try {
                const res = await axios.post('/api/stripe/stripe_intent', {
                    headers: {'Content-Type': 'application/json'},
                    amount: Math.round(cart.total * 100),
                    items: cart,
                    payment_intent_id: '',
                })
                console.log('stripe response', res.data)
                setClientSecret( res.data.client_secret),
                    setPaymentIntent(res.data.id)

            } catch (err) {
                console.log(err)
            }
        }
        newIntent()
    },[]);

    const appearance = {
        theme: 'flat',
        labels: 'floating',
    };
    const options = {
        clientSecret,
        appearance,

    };

    return (
        <div className={styles.form}>
            <Head>
                <Script src="https://js.stripe.com/v3" async></Script>
            </Head>
            {clientSecret && (
                <Elements options={options} stripe={stripe}>
                    <CheckoutForm total={cart.total} paymentIntent={paymentIntent}/>
                </Elements>
            )}
        </div>
    );
};

export default Checkout;
