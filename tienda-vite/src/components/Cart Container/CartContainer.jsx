import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext'


const CartContainer = () => {

    const {cartList, emptyCart, totalPrice, removeByItem} = useCartContext()

    return(
        <div>

            {cartList.length !== 0 ? 
            <>
            {cartList.map(prod =><div key={prod.id}>
                                <div className='w-50'>
                                <img src={prod.photo} alt="" className='w-25' />
                                     
                                </div>
                                Name:{prod.name} - Category:{prod.category} - price:{prod.price} - quantity: {prod.quant}
                                <button onClick={ () => removeByItem(prod.id)} className='btn btn-danger'> x </button>
                                </div>     
                                )}
                                <h4>Total price is: {totalPrice()} </h4>
                                <button className='btn btn-danger' onClick= {emptyCart}>Empty Cart</button>

            </>
            
            :

            <>
              <h2>Home</h2>
              <Link to= '/'>Products</Link>
            </>
            }
        </div>
    )
}

export default CartContainer