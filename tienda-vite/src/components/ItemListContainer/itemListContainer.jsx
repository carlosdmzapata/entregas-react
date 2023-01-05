import {useState, useEffect} from 'react'
import './itemListContainer.css'


const products = [
    { id: '1', name: 'T-shirt', description: 'Anime Shirt', stock: 15, price: "$20", foto: 'https://micco.vtexassets.com/arquivos/ids/182341-1200-auto?v=637764012859800000&width=1200&height=auto&aspect=true'},
    { id: '2', name: 'Cap', description: 'Baseball cap', stock: 12, price: "$17", foto: 'https://cdn.shopify.com/s/files/1/0043/8016/4142/products/61CQokEVWbL_900x900.jpg?v=1666219355'},
    { id: '3', name: 'Shoes', description: 'snickers for woman', stock: 18, price: "$35", foto: 'https://falabella.scene7.com/is/image/FalabellaCO/881984547_1?wid=800&hei=800&qlt=70'},
    { id: '4', name: 'Sweater', description: 'Cotton Sweater', stock: 7, price: "$27", foto: 'https://hmcolombia.vtexassets.com/arquivos/ids/2153042/Saco---Azul-claro---H-M-CO.jpg?v=638016755675400000'}
]


const gFetch = ()=>{ 
    return new Promise( (resolve, reject)=>{
       const condition = true
       if (condition) {
        setTimeout(()=>{
           resolve(products)
        }, 1000)
       } else {
           reject('canceled')
         }
   }) 
}

const ItemListContainer = ({greetings}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect (()=>{
    gFetch()
    .then(answer => answer)
    .then(dataProducts => setProducts(dataProducts))
    .catch(error => console.log(error))
    .finally(()=>setLoading(false))
    }, [])
    console.log(products)
 

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
                        {`${product.foto}`}
                    </div>
                    <div className="card-body">
                        <img src="product.foto" alt="" className='w-50' />
                        {product.price}
                    </div>
                    <div className='card-footer'>
                       
                         <button className='btn btn-outline-primary'>
                            detalle del producto
                         </button>
                   
                    </div>
                </div>

               </div> )
               }
            
        </section>
    )
}

export default ItemListContainer