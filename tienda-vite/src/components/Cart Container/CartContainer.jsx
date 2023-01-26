import { addDoc, collection, getFirestore } from 'firebase/firestore'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext'


const CartContainer = () => {

    const [dataForm, setDataForm] = useState({
      name: '',
      email: '',
      phone: ''  
    })

    const {cartList, emptyCart, totalPrice, removeByItem} = useCartContext()
    console.log(cartList)

    const addOrder = (e) => {
        e.preventDefault()
        const order = {}
        order.buyer = dataForm
        order.price = totalPrice()
        order.items = cartList.map( ( { id, price, name } ) => ( {id, price, name} ) )
        console.log (order)
        
        const db = getFirestore()
        const queryCollection = collection(db, 'orders')
    
        // muchas ordenes 
    
        // products.forEach(async prod => {
        //   await addDoc()
        // });
        
        addDoc(queryCollection, order)
        .then(answ => console.log(answ))
        .catch(err => console.log(err))
        .finally(() => emptyCart())

        //update
        //const queryDoc = doc(db, 'products', '9XerCVxLmZ7PuIu0B1nx')
        //updateDoc(queryDoc, {
         // stock: 90
       // })
       //console.log('updated')
    }

    const handleOnChange = (e) => {
        console.log('input name', e.target.name)
        console.log('input value', e.target.value)
        setDataForm({
            ...dataForm,
        [e.target.name]: e.target.value
        
        })
    }
    console.log(dataForm)

    return(
        <div>

            {cartList.length !== 0 ? 
            <>
            {cartList.map(prod =><div key={prod.id}>
                                <div className='w-50'>
                                <img src={prod.photo} alt="" className='w-25' />
                                     
                                </div>
                                Name:{prod.name} - Category:{prod.category} - price:{prod.price} - quantity: {prod.quant}
                                <button onClick={ () => removeByItem(prod.id)} className='btn btn-outline-danger'> x </button>
                                </div>     
                                )}
                                <h4>Total price is: {totalPrice()} </h4>
                                <form onSubmit={addOrder}>
                                    <input type="text" onChange={handleOnChange} name='name' value={dataForm.name} placeholder='input your name' />
                                    <input type="text" onChange={handleOnChange} name='phone' value={dataForm.phone} placeholder='input your phone' />
                                    <input type="text" onChange={handleOnChange} name='email' value={dataForm.email} placeholder='input your email' />
                                    <button className='btn btn-success'>Buy</button>
                                </form>
                                <button className='btn btn-outline-danger' onClick= {emptyCart}>Empty Cart</button>
                                

            </>
            
            :

            <>
              <Link to= '/'>
              <button className='btn btn-danger'>Back To Home</button>
              </Link>
            </>
            }
        </div>
    )
}

export default CartContainer