import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {collection, doc, getDoc, getDocs, getFirestore, limit, query, where} from 'firebase/firestore'
import gFetch from '../../assets/Fetch'
import ItemList from '../ItemList/ItemList'
import './itemListContainer.css'


const ItemListContainer = ({greetings}) => {

    const [bool, setBool] = useState (true)
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    useEffect (()=>{
        
           const db = getFirestore()
           const queryCollection = collection(db, 'products')
           
           if (id){
           const queryFilter = query(queryCollection, where('category', '==', id), where('isActive', '==', true))
           getDocs(queryFilter)
           .then(answ => setProducts(answ.docs.map(product => ({id: product.id, ...product.data()}) )))
           .catch(err => console.log() )
           .finally(()=> setLoading(false))
           } else {
            getDocs(queryCollection)
           .then(answ => setProducts(answ.docs.map(product => ({id: product.id, ...product.data()}) )))
           .catch(err => console.log(err) )
           .finally(()=> setLoading(false))
           }

    }, [id])

    const handleClick=(e) => {
        e.preventDefault()
        setBool(!bool)
    }

    const handleAdd =()=>{
        setProducts ([
            ...products,
            {id: products.length +1, name: 'Cap 7', url: 'https://remerasya.com/pub/media/catalog/product/cache/e4d6' }
        ])
    }


    return(
        <section className="section">
            <label>{greetings}</label>

            {loading ? 
               <h2>Loading....</h2>
               :
              
               <ItemList products= {products} />
               
               }
            
        </section>
    )
}

export default ItemListContainer