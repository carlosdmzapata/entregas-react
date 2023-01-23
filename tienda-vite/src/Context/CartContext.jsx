import { useContext, createContext, useState } from "react";


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)
    

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const isInCart = () => cartList.findIndex(prod => prod.id == product.id)

    const addToCart = (product) => {
        const idx = isInCart()

        if (idx !== -1 ){
          cartList[idx].quant += product.quant
          setCartList([...cartList])
        } else {
            setCartList([...cartList, product])
        }
        
    }

    const totalPrice = () => cartList.reduce((counter, product) => counter += (product.price * product.quant) , 0)

    const totalQuantity = () => cartList.reduce((counter, product) => counter += product.quant, 0)

    const removeByItem = (id) =>  {
        setCartList( cartList.filter(prod => prod.id !== id ) )
    }



    const emptyCart = ()=> {
        setCartList([])
    }

    return (
        <CartContext.Provider value = {{cartList, addToCart, emptyCart, totalPrice, totalQuantity, removeByItem}}>
            {children}
        </CartContext.Provider>
    )
}