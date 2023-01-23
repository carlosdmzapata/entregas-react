
export const Input = () => {

    const inputHandler = (event) => {
        event.stopPropagation()
        //event.preventDefault
        console.log(event.nativeEvent)
    }

    return (
        <div className="box">
            <div className="border border-5 border-warning w-50">
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
