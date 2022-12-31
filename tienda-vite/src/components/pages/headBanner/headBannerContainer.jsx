import Formulario from "../../formulario/formulario"
import Item from "../../item/item"
import Titulo from "../../titulo/titulo"

const HeadBannerComponent = ({greetings, children}) => {

    const saludo = () => console.log('Hola')
    let tituloApp = 'TRIBE STORE'
  
    return(
     <>
      <Titulo titulo = {tituloApp} subtitulo = {'Styling Clothing'} />
      <p>{greetings}</p>
      <Formulario />
      <Item saludo = {saludo} />
      {children}
     </>
    )
}

export default HeadBannerComponent