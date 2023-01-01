function Item({saludo}){
    return (
      <div>
        <h1>Item</h1>
        <img src="https://cdn-icons-png.flaticon.com/512/107/107831.png?w=826&t=st=1672197019~exp=1672197619~hmac=56cf91036e5ccccbf186929e8a0a9706423bc2aa4f5b13b7c5e6b8564ad4be0b" alt="carrito" />
        <button onClick={saludo}>Saludar</button>
      </div>
    )
  }

  export default Item