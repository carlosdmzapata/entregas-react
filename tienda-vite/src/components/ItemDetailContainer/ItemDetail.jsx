import {useState, useEffect} from 'react'


const products = [
    { id: '1', name: 'T-shirt', description: 'Anime Shirt', stock: 15, price: "$200"},
]


const gFetch = ()=>{ 
    return new Promise( (resolve, reject)=>{
       const condition = true
       if (condition) {
        setTimeout(()=>{
           resolve(products)
        }, 4000)
       } else {
           reject('canceled')
         }
   }) 
}

const ItemDetail = ({Produ}) => {

    const [products, setProducts] = useState([])
    useEffect (()=>{
    gFetch() 
    .then(answer => answer)
    .then(dataProducts => setProducts(dataProducts))
    .catch(error => console.log(error))
    }, [])
    console.log(products)


    return(
        <section className="section">
            <br />
            <label>{Produ}</label>
            {
               products.map(product =>  <div
                 style={{marginLeft:100}}
                 className='col-xl-10'
                 key={product.id}
               >

                <div className="card w-500 mt-10" >
                    <div className="card-header">
                        {`${product.name} - ${product.description}`}
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

export default ItemDetail 