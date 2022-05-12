import styles from '../../styles/website/CartSummary.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from "next/router";
import mask from "../../public/img/WEB-Zensee-Pro-M1010S-QBA.jpg";
import {ArrowBackIos, DeleteOutline} from '@mui/icons-material'
import {useState} from "react";
import {useSelector} from "react-redux";
import Modal from "../Modal";
const CartSummary = ({ setShowModal, product, img, quantity}) => {
  const router = useRouter()
    const cart = useSelector(state=>state.cart);
    const {cartId} = useSelector(state=>state.cart);
    const handleClick = () => {

        setShowModal()
        router.push(`/cart/${cartId}`)
    }
    console.log(cart)
    return (
        <div className={styles.container}>
             <span onClick={(()=>setShowModal())} className={styles.close}>
                  X
              </span>
            <div className={styles.left}>
                <div className={styles.title}>
                    <span>Added to Shopping Cart</span>
                </div>
                <hr className={styles.topHr}/>
                <div className={styles.items}>
                    <div className={styles.delete}>
                        <span>
                            <DeleteOutline />
                        </span>
                    </div>
                    <Image src={img} alt="" height={120} width={120} objectFit="contain"/>
                    <div className={styles.desc}>
                        <span className={styles.name}>{product.name}</span>
                        <span className={styles.item}>Price: €{(product.price).toFixed(2)}</span>
                        <span className={styles.item}>Quantity: {quantity}</span>
                    </div>


                </div>
                <Link href='/shop'>
                <span className={styles.backButton}>
                    <ArrowBackIos fontSize='x-small'/>
                    CONTINUE SHOPPING
                </span>
                </Link>
            </div>
            <hr className={styles.hr}/>
            <div className={styles.right}>
                <div className={styles.title}>
                    <span>Shopping Cart</span>
                </div>
                <hr className={styles.topHr}/>
                <div className={styles.totals}>
                    <div className={styles.itemTotals}>
                        <span className={styles.infoTotals}>Total Items: {cart.quantity}</span>
                        <span className={styles.infoTotals}>Total: €{(cart.total).toFixed(2)}</span>
                    </div>
                    <button className={styles.button} onClick={handleClick}>VIEW CART</button>
                </div>
            </div>
        </div>
    );
};

export default CartSummary;
