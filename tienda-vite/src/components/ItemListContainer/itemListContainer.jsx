import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import gFetch from '../../assets/Fetch'
import ItemList from '../ItemList/ItemList'
import './itemListContainer.css'


const ItemListContainer = ({greetings}) => {

    const [bool, setBool] = useState (true)
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    console.log('itemListContainer')

    useEffect (()=>{
        if (id) {

            gFetch()
            //.then(answer => answer)
            .then(dataProducts => setProducts(dataProducts.filter(product => product.category === id)))
            .catch(error => console.log(error))
            .finally(()=>setLoading(false))

        } else {
            gFetch()
            //.then(answer => answer)
            .then(dataProducts => setProducts(dataProducts))
            .catch(error => console.log(error))
            .finally(()=>setLoading(false))
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

            <button onClick={handleClick}>Change State</button>
            <button onClick={handleAdd}>Add Item</button>

            {loading ? 
               <h2>Loading....</h2>
               :
              
               <ItemList products= {products} />
               
               }
            
        </section>
    )
}

export default ItemListContainer