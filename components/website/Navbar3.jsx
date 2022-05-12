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
const Navbar = () => {
    const {data: session} = useSession()
    const {quantity, cartId} = useSelector(state=>state.cart);
    const cart = useSelector(state=>state.cart)

    const favorite = useSelector(state=>state.favorite);
    const [showDropdown, setShowDropdown] =useToggle()
    const [user, setUser] = useState('')
    const [searchInput, setSearchInput] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);
    const [showModal, setShowModal] = useToggle()
    const [active, setActive] = useToggle()
    const [title, setTitle] = useState('')
    const test = useRef(null);
    const dispatch = useDispatch();

    useEffect(()=>{
        setUser(session)
    },[session])

    const searchItems = (searchValue) => {
        setShowDropdown()
        setSearchInput(searchValue)
        const filteredData = inventory.filter((item)=>{
            return Object.values(item).join("").toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
    };

    const handleSearch = (e) => {
        setShowDropdown()
        setFilteredResults([])
        test.current.reset()

    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.value)

    };
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
console.log(cartId)
    return (
        <>
        <Modal showModal={showModal} setShowModal={setShowModal} location={'home'} title={title}/>
        <div className={styles.container2}>
            <div className={styles.wrapper2}>
                <div className={styles.item}>
                    <Image className={styles.logo} src={logo} alt="" height={160} width={200} objectFit="contain"/>
                </div>
                <div className={styles.item}>
                    <ul className={styles.list}>
                        <Link href="/" >
                            <li className={styles.listItem}>Home</li>
                        </Link>
                        <Link href="/learn" >
                            <li className={styles.listItem}>Learn to Dive </li>
                        </Link>
                        <Link href="/shop" >
                            <li className={styles.listItem}>Shop</li>
                        </Link>
                        <Link href="/overons" >
                            <li className={styles.listItem}>Over Ons</li>
                        </Link>
                        <Link href="/rental" >
                            <li className={styles.listItem}>Rentals</li>
                        </Link>
                        <Link href="/service" >
                            <li className={styles.listItem}>Service</li>
                        </Link>
                        {(user?.isEmployee || user?.isAdmin) &&
                            <Link href="/admin" >
                                <li className={styles.adminItem}>Admin</li>
                            </Link>
                        }
                        {!session?.user ?
                            <li className={styles.listItem}  onClick={()=>{
                                setTitle('Login'),
                                    handleClick('Login')
                            }
                            } >Log In/Register</li>
                            :<>
                                <li className={styles.listItem}>
                                    <div className={styles.avatar} onClick={() => setActive()}>
                                        <div className={styles.avatarText}>
                                            {session &&
                                                <span>{session?.user.firstName[0].toUpperCase()}{session?.user.lastName[0].toUpperCase()}</span>}
                                        </div>
                                    </div>
                                    <div className={active === true ? styles.infoBoxContainerActive : styles.infoBoxContainer}
                                         onClick={() => setActive()}>
                                        <div className={styles.infoBox} >


                                            <div className={styles.popUpTitle}>
                                                <h3>👋 Dag {session?.firstName}</h3>

                                            </div>
                                            <div className={styles.popUpOptions}>
                                                <Link href={`/admin/users/employee/${session?.id}`}>
                                    <span>
                                    <AccountCircleOutlined className={styles.popUpIcon}/>
                                     Profile
                                </span>
                                                </Link>
                                                <span onClick={handleLogOut}>
                                       <ExitToApp className={styles.popUpIcon}/>
                                    Logout
                                </span>

                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </>}


                    </ul>
                    <div className={styles.searchBar}>
                        <form className={styles.searchWrapper}  ref={test} onSubmit={(e)=>handleSubmit(e.target.value)}>
                            <div className={styles.searchContainer}>
                                <input className={styles.input}

                                       placeholder="Search..."
                                       onChange={(e)=> searchItems(e.target.value)}
                                />
                                <SearchOutlined style={{color: "gray", fontSize: 16}}/>
                            </div>
                            {showDropdown &&
                                <div className={styles.dropdown}>
                                    {filteredResults.map((items) => (
                                        <div key={1} className={styles.searchList}>
                                            <Link style={{textDecoration: "none", color: "black"}} href="/shop/masks/555">
                                                <div className={styles.searchItems}>
                                                    <Image className={styles.searchImg} src={mask} alt="" height={30} width={30}/>
                                                    <option className={styles.searchListItem} onClick={()=>handleSearch(items)}>
                                                        {items.title}
                                                    </option>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}

                                </div>}
                        </form>
                    </div>
                </div>
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
