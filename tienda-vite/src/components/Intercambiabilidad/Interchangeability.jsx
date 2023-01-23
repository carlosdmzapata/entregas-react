import { useState } from "react";
import { Link } from "react-router-dom";

const InputCount = () => {

    return(
        <>
            <Link to = '/cart'>
                <button
                className="btn btn-outline-primary"
                onClick={()=>console.log('go to cart')}
                >Checkout</button>
            </Link>
            <Link to='/'>
                <button
                className="btn btn-outline-primary"
                onClick={()=>console.log('go home')}
                >keep shopping</button>
            </Link>
        </>
    )
}

const ButtonCount= ({handleInter}) => {
    return <button
                  className="btn btn-outline-success"
                  onClick={handleInter}
                  >add to cart </button>
}

const Interchangeability = () => {
    const [inputType, setInputType] = useState('button')

    const handleInter = () => {
        setInputType('input')
    }

    return(
        <div>
            <h2>Item Description</h2>
            {
                inputType == 'button' ?
                <ButtonCount handleInter={handleInter} />
                :
                <InputCount />
            }
        </div>
    )

}

export default Interchangeability