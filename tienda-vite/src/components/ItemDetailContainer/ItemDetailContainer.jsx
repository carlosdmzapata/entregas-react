import {useState, useEffect} from 'react'
import gFetch from '../../assets/Fetch'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import Loading from '../Loading/Loading'


const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const [ loading, setLoading ] = useState(true)
    const {productid} = useParams()
    
    useEffect (()=>{
    const db = getFirestore()
    const queryDoc = doc(db, 'products', productid)
    getDoc(queryDoc)
    .then(answ => setProduct({id: answ.id, ...answ.data()}))
    .catch(err => console.log(err))
    .finally(()=>setLoading(false))
    }, [])
    

    return(
        <div className='border border-5 border-success'>
        {loading ? <Loading/> : <ItemDetail product={product} />}
        </div>
    )
}

export default ItemDetailContainer
