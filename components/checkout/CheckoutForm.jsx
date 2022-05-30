import { useEffect, useState } from 'react';
import {
    PaymentElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import axios from 'axios'
import styles from "../../styles/CheckoutForm.module.css";
import {addProcess} from '../../redux/cartSlice';
import {useDispatch, useSelector} from "react-redux";
import useToggle from "../hooks/useToggle";
import {updateOrder} from "../../redux/apiCalls";
import {getSession} from "next-auth/react";
export default function Form({total, paymentIntent}) {
    const guest = useSelector(state=>state.guest)
    const cart = useSelector(state=>state.cart);
    const [email, setEmail] = useState('chrismcnabb6691@ggmail.com');

    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useToggle()
    const [stripeRes, setStripeRes] = useState({})

    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch()
    useEffect(() => {

        if (!stripe) {
            return;
        }

        //Grab the client secret from url params
        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );

        if (!clientSecret) {
            return;
        }
        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            console.log(paymentIntent)
            switch (paymentIntent.status) {

                case 'succeeded':
                    setMessage('Payment succeeded!');
                    dispatch(addProcess(paymentIntent.status))
                    break;
                case 'processing':
                    setMessage('Your payment is processing.');
                    break;
                case 'requires_payment_method':
                    setMessage('Your payment was not successful, please try again.');
                    break;
                default:
                    setMessage('Something went wrong.');
                    break;
            }
        });




    }, [stripe, dipatch]);



    const handleSubmit = async (e) => {
        e.preventDefault();
        const session = await getSession()
        if (!stripe || !elements) {
            console.log('not loaded');
            // Stripe.js has not yet loaded.
            return;
        }

        setIsLoading();
        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: process.env.VERCEL_URL+`/success`,
                receipt_email: email,
                shipping: {
                    address: { city: 'NY' },
                    name: 'Shipping user',
                },
                payment_method_data: {
                    billing_details: {
                        name: 'Billing user',
                    },
                },
            },

        });

              if (error.type === "card_error" || error.type === "validation_error") {
                  setMessage(error.message);
              } else {
                  setMessage("An unexpected error occurred.");
              }


          setIsLoading();
    };
console.log(stripeRes)
    return (
        <>

            <div className={styles.wrapper}>
            <form id="payment-form" onSubmit={handleSubmit} className="m-auto">
                <div className="mb-3">

                </div>
                <div className="mb-6">

                </div>
                <PaymentElement id="payment-element" />
                <div className={styles.buttonContainer}>
                    <button
                    className={styles.button}
                    disabled={isLoading || !stripe || !elements}
                    id="submit"
                >
          <span id="button-text">
            {isLoading ? (
                <div className="spinner" id="spinner">

                </div>
            ) : (
                'Pay now'
            )}
          </span>
                </button>
                </div>
                {message}

            </form>
            </div>

        </>
    );
}
