//import {loginFailure, loginStart, loginSuccess, logout, registerSuccess, registerFailure} from "./userRedux";
import {addProduct, editProduct, clearCart, newId, removeProduct, cartStart, setTotal} from "./cartSlice"
//import {publicRequest, userRequest} from "../requestMethods";
import {addFavorite, clearFavorite, favoriteStart, removeFavorite} from "./favoriteSlice";
import axios from "axios";
import {getSession, signIn} from "next-auth/react";
//import {addItem} from "./productsRedux";

 export const retrieveCart = async (dispatch, session, cart) => {
console.log(session)

    if(session.cart[0]?.items.length >0 && session.cart[0].status === 0){
         dispatch(
             cartStart(session.cart[0]),
         )
         dispatch(
             favoriteStart(session.favorites[0]),
         )
     }else if(cart.products.length>0){

         try{
             const res = await axios.post(`http://localhost:3000/api/cart`,

                 {
                     userId: session.id,
                        items: cart.products
                 })
             dispatch(newId(res.data._id))
             dispatch(
                 favoriteStart(session.favorites[0]),
             )
         }catch(err){
             console.log(err)
         }
     }else if(session.favorites.length >=1){
        dispatch(
            favoriteStart(session.favorites[0])
        )

    }else{
    return null
    }

      /*try{
          //const cart = await axios.get(`http://localhost:3000/api/cart/${session.cart[0]._id}`)
         //const favorites = await axios.get(`http://localhost:3000/api/favorite/${session.favorites[0]._id}`)
        console.log('cart', cart)
        dispatch(
            cartStart(session.cart[0]),
        )
        {productId, color, size, quantity, name: product.name, img: product.img[0], price: product.price, modelId: product.modelId}
        dispatch(
              favoriteStart(session.favorites[0]),
          )
      }catch(err){
          console.log(err)
      }*/
    }

export const setFavorites = async (dispatch, items, session, favs, favoriteCart) => {

    if(!session){
        return null;
    }
    if(session && favoriteCart.length === 0){
        console.log('first')
        try{
            const res = await axios.post(`http://localhost:3000/api/favorite`,
                {
                    userId: session.id,
                    items: {...items}
                })
            dispatch(
                addFavorite({...items})
            )
            console.log('res at api', res.data)
        }catch(err){
            console.log(err)
        }
    }
    if(session && favoriteCart.length > 0){
        console.log(items)
       try {
            const res = await axios.put(`http://localhost:3000/api/favorite?favorite=${session.id}`,
                items
            )
            console.log('res at api', res.data)
            dispatch(
                addFavorite({...items})
            )

        } catch (err) {
            console.log(err)
        }
    }


};
export const newCart = async (dispatch, items, session, cart) => {

  if(!session){
        dispatch(
            addProduct(items)
        );

    }
    if(session && cart.length === 0) {
        try{
            const res = await axios.post(`http://localhost:3000/api/cart`,
                {
                    userId: session.id,
                    items
                })
            dispatch(
                addProduct(items)
            )
            dispatch(newId(res.data._id))
            console.log('res at api', res.data)
        }catch(err){
            console.log(err)
        }
    }
  if(session && cart.length > 0){
        try {
            const res = await axios.put(`http://localhost:3000/api/cart?cart=${session.id}`,
                items
            )
            dispatch(
                addProduct(items)
            )
            dispatch(newId(res.data._id))
            console.log('--->',res.data)
        } catch (err) {
            console.log(err)
        }
    }
};

export const updateCartItem = async (dispatch, quant, id, productId, idx, total) => {
    try{
        const res = await axios.put(`http://localhost:3000/api/cart/${id}`,
            {quant, id,  productId}
        )
         dispatch(
            editProduct({quant, idx, total})
        )
        console.log('res from server', res.data)
    }catch(err){
        console.log(err)
    }

};

export const deleteCartItem = async (dispatch, id, deleteId, idx, amount) => {
    console.log('amount', amount)


    try{
        const res = await axios.put(`http://localhost:3000/api/cart/${id}`,
            {deleteId}
        );
       dispatch(
            removeProduct({idx, amount})
        )
        console.log('Item successfully deleted...')
    }catch(err){
        console.log(err)
    }
}

export const deleteCart = async (dispatch, id, cart) => {
    console.log(id)
    try{
        const res = await axios.delete(`http://localhost:3000/api/cart/${id}`

        );
        dispatch(clearCart({...cart.products}))
        console.log('Item successfully deleted...')
    }catch(err){
        console.log(err)
    }
}
export const logOut = async (dispatch, cart, favorite, ) => {
    dispatch(clearCart({...cart.products}))
    dispatch(
        clearFavorite({...favorite.favorites})
    )
}

export const updateOrder = async (dispatch, session, id, cart) => {
console.log('api--->', cart)

   try{
            const res = await axios.post('http://localhost:3000/api/orders',
            {
                userId: session.id,
                customer: session.firstName,
                address: session.user.address,
                email: session.personal.email,
                total: cart.total,
                items: cart.products,
                purchaseType: 'Web-shop',
                shippingMethod: cart.shipping
});
        const remove = await axios.delete(`http://localhost:3000/api/cart/${id}`)


        dispatch(clearCart({...cart.products}))
        console.log('delete', remove.data)
            console.log('order', res.data)
        }catch(err){
            console.log(err)
        }

}



