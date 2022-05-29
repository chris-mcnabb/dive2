import React, {useState, useRef, useEffect} from 'react';
import styles from "../../styles/Navbar3.module.css"
import Image from "next/image";
import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import {useDispatch, useSelector} from "react-redux";
import {
    FavoriteBorderOutlined,
    ShoppingCartOutlined,
    Facebook,
    YouTube,
    Twitter,
    Phone,
    SearchOutlined, AccountCircleOutlined, FullscreenExit
} from '@mui/icons-material';
import mask from "../../public/img/WEB-Zensee-Pro-M1010S-QBA.jpg";
import logo from "../../public/img/headerlogo.svg";
import Modal from "../Modal";
import useToggle from "../hooks/useToggle";
import {clearCart} from "../../redux/cartSlice";
import {ExitToApp} from "@material-ui/icons";
import {clearFavorite} from "../../redux/favoriteSlice";
import Hamburger from "./Hamburger";
import MainNavigation from "./MainNavigation";

const Navbar = () => {
    const {data: session} = useSession()
    const {quantity, cartId} = useSelector(state=>state.cart);
    const cart = useSelector(state=>state.cart)
    const inventory = useSelector(state=>state.item.items)
    const favorite = useSelector(state=>state.favorite);
    const [showDropdown, setShowDropdown] =useToggle()
    const [user, setUser] = useState('')
    const [searchInput, setSearchInput] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);
    const [showModal, setShowModal] = useToggle()
    const [active, setActive] = useToggle()
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState('')
    const test = useRef(null);
    const dispatch = useDispatch();

    useEffect(()=>{
        setUser(session)
    },[session])


    const handleClick = () => {
        setShowModal();
    }
    const handleLogOut = () => {
        dispatch(
            clearCart({...cart.products}),
        )
        dispatch(
            clearFavorite({...favorite.favorites})
        )
        signOut()

    }
console.log(session)
    return (
        <>
        <Modal showModal={showModal} setShowModal={setShowModal} location={'home'} title={title}/>
        <div className={styles.container2}>
            <div className={styles.wrapper2}>
                <div className={styles.mainImage}>
                    <Image className={styles.logo} src={logo} alt="" height={160} width={200} objectFit="contain"/>
                </div>
                <div className={styles.mainImageMobile}>
                    <Image className={styles.logo2} src={logo} alt="" height={100} width={150} objectFit="contain"/>
                </div>
                <Hamburger setOpen={setOpen} open={open} quantity={quantity} session={session} user={user} favoriteQuantity={favorite.quantity} setTitle={setTitle} handleClick={handleClick} handleLogOut={handleLogOut} />
        <MainNavigation   setActive={setActive} active={active} test={test} showDropdown={showDropdown}  session={session} user={user} setTitle={setTitle} handleClick={handleClick} handleLogOut={handleLogOut}/>

                <div className={styles.item}>
                    <div className={styles.social}>
                        <div className={styles.socialContainer}>
                            <a href="https://www.facebook.com/RngDiving"  target="_blank" rel="noopener noreferrer">
                                <Facebook   style={{color: "#c8f5ff"}}/>
                            </a>
                        </div>

                        <div className={styles.socialContainer}>
                            <a href="https://twitter.com/padi"  target="_blank" rel="noopener noreferrer">
                                <Twitter   style={{color: "#c8f5ff"}}/>
                            </a>
                        </div>
                        <div className={styles.socialContainer}>
                            <a href="https://www.youtube.com/user/PADIProducer"  target="_blank" rel="noopener noreferrer">
                                <YouTube   style={{color: "#c8f5ff"}}/>
                            </a>
                        </div>
                        <Link href={`/shop/favorites`}>
                        <div className={styles.favorite}>
                            <FavoriteBorderOutlined   sx={{color: "#c8f5ff", fontSize: 30}}/>
                            <div className={styles.counter2}>{favorite.quantity}</div>
                        </div>
                        </Link>
                        <Link href={`/cart/${cartId}`}>
                        <div className={styles.cart}>
                            <ShoppingCartOutlined  sx={{color: "#c8f5ff", fontSize: 30}}/>
                            <div className={styles.counter2}>{quantity}</div>

                        </div>
                        </Link>
                    </div>
                    <div>
                        <div className={styles.text}> +31 (0)88 00 454 00</div>
                        <div className={styles.text}> info@rngdiving.nl</div>
                    </div>
                </div>

            </div>

        </div>
        </>
    );
};

export default Navbar;
