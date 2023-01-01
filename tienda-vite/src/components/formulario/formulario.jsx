import Titulo from "../titulo/titulo"

function Formulario (){
  let subTitulo = 'Formulario'
    return  (
      <div>
       <Titulo titulo = 'Ingresa tus datos' subtitulo = {subTitulo} />
       <form>
         <input type="text" placeholder="Nombre" />
         <input type="text" placeholder="Apellido" />
         <button type="submit">Enviar</button>
       </form>
      </div>
    )
  }

  export default Formulario