import Header from '../templates/Header.js'
import Home from '../pages/Home.js'
import Character from '../pages/Character.js'
import Error404 from '../pages/Error404.js'
import resolveRoutes from '../utils/resolveRoutes.js'
import getHash from '../utils/getHash.js'

const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',

}

const router = async () => {
    //Ubicamos el bloque donde haremos el renderizado del header en el documento.

    const header = document.getElementById('header')
    //También lo haremos con el contenido.
    const content = document.getElementById('content')
    //Renderizamos el header.
    header.innerHTML =  await Header()
    //Obtenemos el hash de la url.
    let hash = getHash()
    let route = await resolveRoutes(hash)
    //Obtenemos el componente a renderizar dependiendo de la ruta. Si no existe, renderizamos el Error404.
    let render = routes[route] ? routes[route] : Error404
    //Renderizamos el contenido inyectandolo a la sección de contenido.
    content.innerHTML = await render()
}


export default router