import React from "react"
import ItemCount from "../ItemCount/ItemCount"


const onAdd = (quant) => {
    console.log('La cantidad seleccionada es', quant)
}


const ItemDetail = ({product}) => {
    return(
        <div className="container border border-3 border-primary rounded">
            <div className='row'>
                <div className='col'>
                    <img className='w-50' src={product.foto} alt="product picture" />
                    <h3>Name: {product.name}</h3>
                    <h3>Description: {product.description}</h3>
                    <h4>Price: {product.price}</h4>
                </div>
                 <div className='col'>
                    <ItemCount stock={19} initial={1} onAdd={onAdd} />
                 </div>
                </div>       
        </div>
    )
}

export default ItemDetail