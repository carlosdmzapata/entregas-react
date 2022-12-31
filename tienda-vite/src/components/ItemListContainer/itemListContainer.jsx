import {useState, useEffect} from 'react'
import './itemListContainer.css'


const products = [
    { id: '1', name: 'T-shirt', description: 'Anime Shirt', stock: 15},
    { id: '2', name: 'Cap', description: 'Baseball cap', stock: 12},
    { id: '3', name: 'Shoes', description: 'snickers for woman', stock: 18},
    { id: '4', name: 'Sweater', description: 'Cotton Sweater', stock: 7}
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

    const [count, setCount] = useState(0)
    const [boolean, setBoolean] = useState(true)

    useEffect (()=>{
        console.log('API Call')
    }, [])

    useEffect (()=>{
        console.log('Another API Call')
    }, [boolean])

    //useEffect(()=>{
      //  console.log('addEventlisterner(evento, funci')
       // return ()=>{
          //  console.log('removeEventListener')
      //  }
    // })

  
    const handleCounter2 = () => {
        setCount(count-1)
     }

    const handleCounter = () => {
        setCount(count+1)
     }

    const handleBoolean = () => {
        setBoolean(!boolean)
     }
     console.log(boolean)
 

    return(
        <section className="section">
            ItemListContainer
            <br />
            <label>{greetings}</label>
            <p className='alert alert-danger'>{count}</p>
            <button className='btn btn-outline-primary' onClick={handleCounter2}>-</button>
            <button className='btn btn-outline-primary' onClick={handleCounter}>+</button>
            <br />
            <button className='btn btn-outline-primary' onClick={handleBoolean}>Change</button>
            {loading ? 
               <h2>Loading....</h2>
               :
               products.map(product => <li key={product.id}>{product.name}</li>)
               }
        </section>
    )
}

export default ItemListContainer