import { memo } from "react"
import { Link } from "react-router-dom"

const Item = memo(

  ({product})=>{
  console.log('item')

    return (
      <div style={{marginLeft:100}} className='col-md-3'>
        
       <div className="card w-100 mt-5" >
         <div className="card-header">
             {`${product.name} - ${product.category}`}
         </div>
         <div className="card-photo">
           <img src={`${product.photo}`} alt="" className='w-50' />
         </div>
         <div className="card-body">
             {product.price}
         </div>
         <div className='card-footer'>
            <Link to={`/detail/${product.id}`}>
              <button className='btn btn-outline-primary btn-block'>
                 Product Detail
              </button>
            </Link>
         </div>
      </div>

    </div>
    )
  }
)
  export default Item