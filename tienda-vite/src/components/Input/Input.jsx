
export const Input = () => {

    const inputHandler = (event) => {
        event.stopPropagation()
        console.log(event.nativeEvent)
    }

    return (
        <div className="box">
            <div className="">
                <input
                    className="m-5"
                    onClick={ inputHandler } 
                    type="text"
                    name="nombre"
                    id="i"
                 />
            </div>
        </div>
    )
}