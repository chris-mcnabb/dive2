import {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useRouter} from "next/router";
import {useStripe} from '@stripe/react-stripe-js';
import {Elements} from "@stripe/react-stripe-js";
import styles from "../styles/CheckoutForm.module.css";
const Success = () => {
    const router = useRouter()
    const {redirect_status} = router.query
    const success = useSelector(state=>state.cart.processed)
    const [message, setMessage] = useState(null);
    const stripe  = useStripe()
    useEffect(async() => {
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
            switch (paymentIntent.status) {
                case 'succeeded':
                    setMessage('Payment succeeded!');
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




    }, [stripe]);



    console.log('--->processed', success)
    return (

        <div style={{height: '100vh'}}>
            {message}
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
        </div>

    );
};

export default Success;
Success.layout = "L3";
