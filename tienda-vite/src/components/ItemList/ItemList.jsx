import { Link } from "react-router-dom"
import Item from "../item/item"


const ItemList = ({products}) => {
    return(
        products.map(product =>  <Item key={product.id} product={product}/> )
    )
}

export default ItemList