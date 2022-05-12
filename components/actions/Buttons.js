import {addFavorite, removeFavorite} from "../../redux/favoriteSlice";
import styles from "../../styles/website/ProductPage.module.css";
import {FavoriteBorderOutlined} from "@mui/icons-material";
import React from "react";
import {setFavorites} from "../../redux/apiCalls";


export const FavoriteButton = ({dispatch, product, quantity, favs, favoriteCart, session}) => {

    const handleSave =  () => {
        const dupSearch = favs.filter((favorite)=>favorite._id === product._id )
        console.log(dupSearch.length)
      if(dupSearch.length===0){
            setFavorites(
                dispatch, product, session, favs, favoriteCart
            )
            console.log(dupSearch.length)


        }

    };
  const clearFavorite = async () => {
     dispatch(
            removeFavorite( {id: product._id, quantity})
        )

        //editFavorites(dispatch, user, access, product)
    };
    return(
        <>
            {favs.filter((favorite)=>favorite._id === product._id ).length === 0 ?
                <button className={styles.favoriteButton} onClick={handleSave}>
                    <span className={styles.favoriteSpan}>Save for Later</span>
                    <FavoriteBorderOutlined   sx={{color: "red", fontSize: 30}}/>
                </button> :
                <button className={styles.savedButton} onClick={clearFavorite}>
                    <span className={styles.favoriteSpan}>Saved</span>
                    <FavoriteBorderOutlined   sx={{color: "white", fontSize: 30}}/>
                </button>}
        </>
    )
}


export const AddToCart = ({setQuantity, quantity, setTitle, handleClick}) => {

    return(
        <>
            <div className={styles.orderContainer}>
                <input  onChange={(e)=>setQuantity(e.target.value)} type="number" defaultValue={quantity} min='1' className={styles.quantity}/>
                <button className={styles.button} onClick={()=> {
                    setTitle('Cart'),
                        handleClick('Cart')
                }}>Add to Cart</button>
            </div>
        </>
    )
}
