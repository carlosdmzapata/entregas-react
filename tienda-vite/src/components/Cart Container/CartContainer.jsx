import {useState, useEffect} from 'react'
import { useCartContext } from '../../Context/CartContext'


const CartContainer = () => {

    const {cartList, emptyCart} = useCartContext()

    return(
        <div>
            {cartList.map(prod => 
                                <div key={prod.id}>
                                <div className='w-50'>
                                <img src={prod.foto} alt="" className='w-25' />
                                     <li key={prod.id}>{prod.name}</li>
                                </div>
                                Name:{prod.name} - Category:{prod.category} - price:{prod.price} - quantity: {prod.quant}
                                </div>     
                                )}
                                <button className='btn btn-danger' onClick= {emptyCart}>Empty Cart</button>
        </div>
    )
}

export default CartContainer