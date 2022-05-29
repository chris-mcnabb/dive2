import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from '../styles/Home.module.css'
import Announcement from "../components/website/Announcement";
import {useEffect, useState} from "react";
import {getSession} from "next-auth/react"
//import logo from "../public/img/headerlogo.svg"
import Logo from "../components/website/Logo";
import {toast, Toaster, ToastBar} from "react-hot-toast";
import axios from "axios";
import Slider from "../components/website/Slider";
import VendorLogos from "../components/website/VendorLogos";
import {useDispatch} from "react-redux";
import {addItem} from "../redux/productSlice";
import {retrieveProducts} from "../redux/apiCalls";
const notify = () => toast("Here is my toast!");
const sucessNotify = () => toast.success("Sucess!",  {
    position: 'bottom-center',

});
const errorNotify = () => toast.error("Error");

Home.layout = "L3";
export default function Home({session, images, products}) {


    const [sale, setSale] = useState(false)
    const dispatch = useDispatch()
    useEffect(()=>{
       const setProducts = async() => {
           await retrieveProducts(dispatch, products)
       }
       setProducts()
    },[products])

  return (
   <>
       <div className={styles.container}>

          <div className={styles.announcement}>
              {sale && <Announcement/>}
          </div>
           <Head>
               <title>RnG Diving</title>
               <style jsx global>{`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Nunito;
  }
               `}
               </style>
               <meta name="description" content="Generated by create next app" />
               <link rel="icon" href="/favicon.ico"/>
           </Head>
           <Slider pics={images}/>
           <VendorLogos logos={images}/>
       </div>
   </>
  )
};
export const getStaticProps = async (ctx) =>{

    const res = await axios.get(`http://localhost:3000/api/products`);
    const cat = await axios.get(`http://localhost:3000/api/catmenu`);
    const img = await axios.get(`http://localhost:3000/api/images`);

    return{
        props:{
            products: res.data,
            subCat: cat.data,
            images: img.data,
            session: await getSession(ctx)
        }
    }
};
