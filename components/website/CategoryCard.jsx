import {useEffect, useState} from "react";
import{FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined, Favorite} from "@mui/icons-material";
import styles from "../../styles/website/CategoryCard.module.css"
import Image from "next/image"
import Link from "next/link"
import mask from "../../public/img/WEB-Zensee-Pro-M1010S-QBA.jpg"
const CategoryCard = ({category, fill, index}) => {

    const containerSize = (index) => {
        if(index === 'all'){
            return styles.container
        }
        if(index === 'category'){
            return styles.serviceContainer
        }
    }
    const clearFavorite = () => {
        /*dispatch(
            removeFavorite( {...item, id: item._id})
        )
        editFavorites(dispatch, users, access, {products: item})*/
    };
    return (
        <div className={containerSize(index)}>

            <div className={styles.circle}/>

         <div  className={styles.img}>
             <Image src={category.img}   alt="" layout={fill} objectFit="contain"/>
         </div>
            <Link href={`/shop/category/${category.name}`}>
            <div className={styles.info}>
                <h1 className={styles.title}>{category.name}</h1>
                <div className={styles.iconContainer}>
                    <span className={styles.desc}>{category.desc}</span>
                    {/*<div className={styles.icon}>
                    <ShoppingCartOutlined/>
                </div>
                <div className={styles.icon}>

                        <SearchOutlined/>

                </div>
                <div  className={styles.icon}>
                    <FavoriteBorderOutlined color="warning" onClick={handleSave}/>
                    <Favorite color="warning" onClick={clearFavorite}/>
                    {
                        favs.filter((favorite) => favorite._id === item._id).length === 0
                            ? <FavoriteBorderOutlined color="secondary" onClick={handleSave}/>
                            : <Favorite color="secondary" onClick={clearFavorite}/>
                    }

                </div>*/}
                </div>
            </div>
            </Link>
        </div>
    );
};

export default CategoryCard;
