import {useState, useEffect} from 'react'
import gFetch from '../../assets/Fetch'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})

    const {productid} = useParams()
    
    useEffect (()=>{
    gFetch()
    .then(dataProduct => setProduct(dataProduct.find(product => product.id === productid )))
    .catch(error => console.log(error))
    })
    

    return(
        <ItemDetail product={product} />
    )
}

export default ItemDetailContainer
