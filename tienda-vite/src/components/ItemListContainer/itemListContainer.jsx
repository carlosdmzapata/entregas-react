import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import gFetch from '../../assets/Fetch'
import ItemList from '../ItemList/ItemList'
import './itemListContainer.css'


const ItemListContainer = ({greetings}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    

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