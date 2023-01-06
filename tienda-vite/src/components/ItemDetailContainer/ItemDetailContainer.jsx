import {useState, useEffect} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import gFetch from '../../assets/Fetch'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})

    const {productid} = useParams()
    
    useEffect (()=>{
    gFetch()
    .then(dataProduct => setProduct(dataProduct.find(product => product.id === productid )))
    .catch(error => console.log(error))
    })
    console.log("product", product)

    return(
        <div className="container border border-3 border-primary rounded">
            <div className='row'>
                <div className='col'>
                    <img className='w-50' src={product.foto} alt="product picture" />
                    <h3>Name: {product.name}</h3>
                    <h3>Description: {product.description}</h3>
                    <h4>Price: {product.price}</h4>
                </div>
                 <div className='col'>
                    <ItemCount />
                 </div>
                </div>       
        </div>
    )
}

export default ItemDetailContainer