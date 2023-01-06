import {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import gFetch from '../../assets/Fetch'
import './itemListContainer.css'


const ItemListContainer = ({greetings}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    

    useEffect (()=>{
        if (id) {

            gFetch()
            //.then(answer => answer)
            .then(dataProducts => setProducts(dataProducts.filter(product => product.description === id)))
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
            ItemListContainer
            <br />
            <label>{greetings}</label>
            {loading ? 
               <h2>Loading....</h2>
               :
               products.map(product =>  <div
                 style={{marginLeft:100}}
                 className='col-md-3'
                 key={product.id}
               >

                <div className="card w-100 mt-5" >
                    <div className="card-header">
                        {`${product.name} - ${product.description}`}
                    </div>
                    <div className="card-photo">
                    <img src={`${product.foto}`} alt="" className='w-50' />
                    </div>
                    <div className="card-body">
                        {product.price}
                    </div>
                    <div className='card-footer'>
                       <Link to={`/detail/${product.id}`}>
                         <button className='btn btn-outline-primary'>
                            detalle del producto
                         </button>
                       </Link>
                    </div>
                </div>

               </div> )
               }
            
        </section>
    )
}

export default ItemListContainer