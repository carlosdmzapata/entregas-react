import {useState} from 'react'

    
 const ItemCount = ({stock=20, initial=1, onAdd}) =>  { 

    const [count, setCount] = useState(initial)
    


    const handleCounter2 = () => {
        if(count > initial){
        setCount(count-1)
      }
     }

    const handleCounter = () => {
        if(count < stock){
            setCount(count+1)
          }
     }

     const handleOnAdd = () => {
        onAdd(count)
     }

 

    return(
        <div className="card m-5">
            <div className='card-header'>
              <label htmlFor=''>{count}</label>
            </div>
            <div className='card-body'>
              <button className='btn btn-outline-primary' onClick={handleCounter2}>-</button>
              <button className='btn btn-outline-primary' onClick={handleCounter}>+</button>
            </div>
            <div className='card-footer'>
              <button className='btn btn-outline-success' onClick={ handleOnAdd }>Agregar al carrito</button>
            </div>
        </div>
    )

}

export default ItemCount