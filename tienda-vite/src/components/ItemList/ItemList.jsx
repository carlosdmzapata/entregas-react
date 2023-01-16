import { memo } from "react"
import { Link } from "react-router-dom"
import Item from "../item/item"


const ItemList = memo(({products}) => {
    console.log('itemList')
    return(
        <div
        style={{
            display:'flex',
            flexDirection:'row',
            flexWrap: 'wrap'

       }}
       >
       {products.map(product =>  <Item key={product.id} product={product}/> )}
       </div>
       
        
    )
}

)

export default ItemList