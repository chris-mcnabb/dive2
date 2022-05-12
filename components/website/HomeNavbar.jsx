import React, {useRef, useState, useEffect} from 'react';
import styles from "../../styles/website/Navbar.module.css"
import Image from "next/image";
import Link from "next/link"
import { useSession, signOut } from "next-auth/react"

import {
    FavoriteBorderOutlined,
    ShoppingCartOutlined,
    Facebook,
    YouTube,
    Twitter,
    Phone,
    SearchOutlined
} from '@mui/icons-material';
import mask from "../../public/img/WEB-Zensee-Pro-M1010S-QBA.jpg";
import Modal from "../Modal";
import useToggle from "../hooks/useToggle";
const HomeNavbar = () => {
    const {data: session} = useSession()
    const [user, setUser] = useState('')
    const [showDropdown, setShowDropdown] = useToggle()
    const [searchInput, setSearchInput] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);
    const [showModal, setShowModal] = useToggle()
    const [title, setTitle] = useState('')
    const test = useRef(null);
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

console.log(session?.accessToken)
    return (
        <>
            <Modal showModal={showModal} setShowModal={setShowModal} title={title}/>
        <div className={styles.container}>
            <div className={styles.wrapper}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/telephone.png" alt="" width="32" height="32"/>
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>Contact Us!!</div>
                    <div className={styles.text}> +31 (0)88 00 454 00</div>
                    <div className={styles.text}> info@rngdiving.nl</div>
                </div>
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
                        {!session?.user ?
                            <li className={styles.listItem}  onClick={()=>{
                                setTitle('Login'),
                                    handleClick('Login')
                            }
                            } >Log In/Register</li>
                       :<>
                            <li className={styles.listItem}>Dag {user?.firstName}!</li>
                            <li className={styles.listItem} onClick={()=>signOut()}>Log Out</li>
                        </>}
                        {(user?.isEmployee || user?.isAdmin) &&
                            <Link href="/admin" >
                                <li className={styles.adminItem}>Admin</li>
                            </Link>
                        }
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
                                        <div className={styles.searchList}>
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
               <div className={styles.socialContainer}>
                   <a href="https://www.facebook.com/RngDiving"  target="_blank" rel="noopener noreferrer">
                   <Facebook/>
                   </a>
               </div>

                <div className={styles.socialContainer}>
                    <a href="https://twitter.com/padi"  target="_blank" rel="noopener noreferrer">
                    <Twitter/>
                </a>
                </div>
                <div className={styles.socialContainer}>
                    <a href="https://www.youtube.com/user/PADIProducer"  target="_blank" rel="noopener noreferrer">
                    <YouTube/>
                    </a>
                </div>
                <div className={styles.favorite}>

                        <FavoriteBorderOutlined   sx={{color: "white", fontSize: 30}}/>
                    <div className={styles.counter2}>2</div>
                </div>
                <Link href='/cart/[id]'>
                <div className={styles.cart}>
                        <ShoppingCartOutlined  sx={{color: "white", fontSize: 30}}/>
                    <div className={styles.counter2}>2</div>
                </div>
                </Link>
            </div>
            </div>

        </div>
        </>
    );
};

export default HomeNavbar;
