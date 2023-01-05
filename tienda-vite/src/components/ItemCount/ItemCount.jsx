import {useState} from 'react'

    
 const ItemCount = () =>  { 

    const [count, setCount] = useState(0)
    const [boolean, setBoolean] = useState(true)


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
            <p className='alert alert-danger'>{count}</p>
            <button className='btn btn-outline-primary' onClick={handleCounter2}>-</button>
            <button className='btn btn-outline-primary' onClick={handleCounter}>+</button>
            <br />
            <button className='btn btn-outline-primary' onClick={handleBoolean}>Comprar</button>
        </section>
    )

}

export default ItemCount