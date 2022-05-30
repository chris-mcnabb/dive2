import styles from '../../styles/website/CartSummary.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from "next/router";
import mask from "../../public/img/WEB-Zensee-Pro-M1010S-QBA.jpg";
import {ArrowBackIos, DeleteOutline} from '@mui/icons-material'
import {useState} from "react";
import {useSelector} from "react-redux";
import Modal from "../Modal";
import {deleteCart, deleteCartItem} from "../../redux/apiCalls";
const CartSummary = ({ setShowModal, product, img, quantity, size, color}) => {
    const router = useRouter()
    const cart = useSelector(state => state.cart);
    const {cartId} = useSelector(state => state.cart);
    const handleClick = () => {

        setShowModal()
        router.push(`/cart/${cartId}`)
    }

    const handleRemoveItem = async (item) => {
        console.log('redux', cart.products)

        /*if (cart.products.length === 1) {
            await deleteCart(dispatch, cartId, product)
        } else {
            await deleteCartItem(dispatch, id, cart.products[idx].productId, idx, (item.price * item.quantity), session)
        }*/
        //await deleteCartItem(dispatch, id, mongoCart.items[idx]._id, idx, (item.price * item.quantity))
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

                    <Image src={img} alt="" height={120} width={120} objectFit="contain"/>
                    <div className={styles.desc}>
                        <span className={styles.name}>{product.name}</span>
                        <span className={styles.item}>Price: €{(product.price).toFixed(2)}</span>
                        {size && <span className={styles.item}>Size: {size}</span>}
                        {color && <span className={styles.item}>Color: {color}</span>}
                        <span className={styles.item}>Quantity: {quantity}</span>
                    </div>


                </div>
                <Link href='/shop' passHref>
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
