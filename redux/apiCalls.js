//import {loginFailure, loginStart, loginSuccess, logout, registerSuccess, registerFailure} from "./userRedux";
import {addProduct, editProduct, clearCart, newId, removeProduct, cartStart, getOrder} from "./cartSlice"
//import {publicRequest, userRequest} from "../requestMethods";
import {addFavorite, clearFavorite, favoriteStart, removeFavorite} from "./favoriteSlice";
import axios from "axios";

import {addItem} from "./productSlice";
import {addGuest, clearGuest, guestStart} from "./guestSlice";

export const retrieveCart = async (dispatch, session, cart) => {
console.log(session)

    if(session.cart[0]?.items.length >0 && session.cart[0].status === 0){
         dispatch(
             cartStart(session.cart[0]),
         )

     }else if(cart.products.length>0){

         try{
             const res = await axios.post(`http://localhost:3000/api/cart`,

                 {
                     userId: session.id,
                        items: cart.products
                 })
             dispatch(newId(res.data._id))

         }catch(err){
             console.log(err)
         }
     }
    if(session.favorites.length >=1){
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
                {save: items},
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
export const editFavorites = async (dispatch, items, session, favs, favoriteCart, deleteId) => {
    console.log(session)
   try{
       const res = await axios.put(`http://localhost:3000/api/favorite?favorite=${session.id}`,
           {remove: items._id},
            )
    }catch(err){
        console.log(err)
    }


}
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
                 items,
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

export const updateCartItem = async (dispatch, quant, id, productId, idx, total, session) => {
   if(session){
       try{
           const res = await axios.put(`http://localhost:3000/api/cart/${id}`,
               {quant, id,  productId}
           )
           dispatch(
               editProduct({quant, idx, total})
           )

       }catch(err){
           console.log(err)
       }
   }else{
       dispatch(
           editProduct({quant, idx, total})
       )
   }

};

export const deleteCartItem = async (dispatch, id, deleteId, idx, amount, session) => {
    console.log('amount', amount)

    if(session){
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
    }else{
        dispatch(
            removeProduct({idx, amount})
        )
    }
}

export const deleteCart = async (dispatch, id, cart, session) => {
    console.log(id)
  if(session){
      try{
          const res = await axios.delete(`http://localhost:3000/api/cart/${id}`

          );
          dispatch(clearCart({...cart.products}))
          console.log('Item successfully deleted...')
      }catch(err){
          console.log(err)
      }
  }else{
      dispatch(clearCart({...cart.products}))
  }
}
export const logOut = async (dispatch, cart, favorite, ) => {
    dispatch(clearCart({...cart.products}))
    dispatch(
        clearFavorite({...favorite.favorites})
    )
}

export const updateOrder = async (dispatch, session, id, cart, items) => {
console.log('api--->', session)
if(session){
    try{
        const res = await axios.post('http://localhost:3000/api/orders',
            {
                userId: session.id,
                customer: {firstName: session.firstName, lastName: session.lastName},
                address: session.user.address,
                email: session.personal.email,
                total: cart.total,
                items: cart.products,
                purchaseType: 'Web-shop',
                shippingMethod: cart.shipping
            });
        console.log(items)
        const remove = await axios.delete(`http://localhost:3000/api/cart/${id}`)


        dispatch(clearCart({...cart.products}))

    }catch(err){
        console.log(err)
    }
}


}
export const guestOrder = async(dispatch, id, cart, items, guest) => {
    try{
        const res = await axios.post('http://localhost:3000/api/orders',
            {
                userId: cart.cartId + new Date().getTime(),
                customer: {firstName: guest.shipping.firstName, lastName: guest.shipping.lastName},
                address: {address: guest.shipping.address, city: guest.shipping.city,
                    postalCode: guest.shipping.postalCode, country: guest.shipping.country},
                email: guest.shipping.email,
                phone: guest.shipping.phone,
                total: cart.total,
                items: cart.products,
                purchaseType: 'Web-shop',
                shippingMethod: cart.shipping
            });

        console.log(items)
        dispatch(clearCart({...cart.products}))

        console.log('order', res.data)
    }catch(err){
        console.log(err)
    }
    dispatch(clearGuest(guest))

}
export const updateInventory = async(cart) => {

    cart.products.map(async(item)=>{
            try{
                const inventory = await axios.put(`http://localhost:3000/api/products/inventory/${item.productId}`,
                    {quantity: item.quantity}
                    )
                console.log(inventory.data)
            }catch(err){
                console.log(err)
            }

        })



}
export const retrieveProducts = async (dispatch, products) => {

        dispatch(
            addItem([...products])
        )


}

export const newGuest = async(dispatch, guestUser) => {

    dispatch(guestStart(guestUser))
}

