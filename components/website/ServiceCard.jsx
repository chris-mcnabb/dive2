import React from 'react';
import styles from "../../styles/website/ServiceCard.module.css";
import Image from "next/image";
import mask from "../../public/img/WEB-Zensee-Pro-M1010S-QBA.jpg";
import Link from "next/link";
import {Favorite, FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined} from "@mui/icons-material";
import Router, {useRouter} from 'next/router'
const ServiceCard = ({product, cat}) => {
    /* const favs = useSelector(state=>state.favorite.favorites)
   const users = useSelector((state) => state.users.currentUser?._id);
   const access = useSelector((state) => state.users.currentUser?.accessToken);
   const history = useHistory()
   const dispatch = useDispatch()
   const PF = process.env.REACT_APP_PUBLIC_FOLDER;*/
    const router = useRouter()
    const handleSave = () => {
        /*const dupSearch = favs.filter((favorite)=>favorite._id === item._id )
        if(dupSearch.length===0){
            dispatch(
                addFavorite({...item})
            )
            setFavorites(dispatch, users, access, {products: item})
        }*/
    };
    const handleClick = (page) => {
        router.push(`/shop/${cat}/${page}`)
    }
    const clearFavorite = () => {
        /*dispatch(
            removeFavorite( {...item, id: item._id})
        )
        editFavorites(dispatch, users, access, {products: item})*/
    };
    return (
        <div className={styles.container} onClick={()=>handleClick(product._id)}>

            <div className={styles.circle}>
            {product.img && <Image src={`/img/${product.img[0]}`} alt="" height={150} width={150} objectFit="contain"/>}

            </div>
            <div className={styles.mobileImg}>
                {product.img && <Image src={`/img/${product.img[0]}`} alt="" height={50} width={150} objectFit="contain"/>}

            </div>

                <div className={styles.info}>
                    <span className={styles.manufacturer}>{product.manufacturer}</span>
                    <span className={styles.title}>{product.name}</span>
                    <div className={styles.iconContainer}>
                        <span className={styles.price}>€{(product.price).toFixed(2)}</span>
                    </div>

                            {/*{
                        favs.filter((favorite) => favorite._id === item._id).length === 0
                            ? <FavoriteBorderOutlined color="secondary" onClick={handleSave}/>
                            : <Favorite color="secondary" onClick={clearFavorite}/>
                    }*/}



                </div>

        </div>
    );
};



export default ServiceCard;
