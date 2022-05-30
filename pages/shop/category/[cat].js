import {useState} from 'react';
import styles from "../../../styles/website/Cat.module.css"
import Link from "next/link"
import {useRouter} from "next/router";
import Head from "next/head";
import axios from "axios";
import {ArrowBackIosNewOutlined} from "@mui/icons-material";
import { Pagination } from '@mui/material';
import ServiceCard from "../../../components/website/ServiceCard";

const Product = ({categoryList, subCat}) => {
    /*products
        .slice(0,12)
        .map((item)=>*/

    const router = useRouter()
    const {cat} = router.query
    const [quantity, setQuantity] = useState(1)
    const [catListing, setCatListing] = useState(cat)
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(12)
    const [mapSelection, setMapSelection] = useState(true)
    const handleClick = (sub) => {
        setCatListing(sub)
        if(sub === 'New'){
            setMapSelection(false)
        }
        console.log(sub)
    }
console.log(categoryList.length)
    return (
        <div className={styles.container}>
            <Head>
                <title >{cat}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/public/favicon.ico" />
            </Head>

            <div className={styles.wrapper}>
              <div className={styles.back}>
                  <div className={styles.backArrow}>
                      <Link href="/shop" passHref>
                          <h1 className={styles.terug}><ArrowBackIosNewOutlined/> Terug</h1>
                      </Link>
                  </div>

                  <h1>{cat}</h1>
              </div>
                <div className={styles.buttonContainer}>
                {subCat[0].subCategories.length > 0 && subCat[0].subCategories.map((sub, idx)=>(

                    <button className={styles.sub} key={idx} onClick={()=>handleClick(sub)}>{sub}</button>
                ))}
                    {categoryList[0]?.new &&  <button className={styles.sub} onClick={()=>handleClick('New')}>New</button>}
                </div>
                <Pagination
                    count={Math.round(categoryList.length / 12)}
                    variant='outlined'
                    color='primary'
                    shape='rounded'
                    className='pagination'
                    onClick={()=>{
                        setStart(start +12)
                            setEnd(end +12)

                    }}
                />
                <div className={styles.cardContainer}>
                    {mapSelection && categoryList.slice(start,end).map((item) => (

                            <div key={item._id}>
                                {item.categories.includes(catListing) &&
                                    <ServiceCard key={item._id} product={item} cat={cat}/>
                                }

                            </div>
                        ))
                    }
                    {!mapSelection && categoryList.map((item) => (

                        <div key={item._id}>
                            {item.new &&
                                <ServiceCard key={item._id} product={item} cat={cat}/>
                            }

                        </div>
                    ))
                    }

                </div>

            </div>

        </div>

    );
};


    export default Product;
Product.layout = "L3";

export const getServerSideProps = async ({params}) =>{

    const res = await axios.get(process.env.VERCEL_URL+`/api/products?category=${params.cat}`);
    const cat = await axios.get(process.env.VERCEL_URL+`/api/catmenu?category=${params.cat}`);


    return{
        props:{
            categoryList: res.data,
            subCat: cat.data,

        }
    }



};
