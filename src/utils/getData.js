//Creamos una constante con la URL de la api de rick y morty. Cabe resaltar que esta URL se encuentra en la documentación oficial de la API y la forma en la que se llama 1 personaje de manera individual o en general modificará la URL y se deberá tomar en cuenta para la creación de las constantes creadas en este archivo a través de las cuales se solicitaran los datos a la API.
const API = 'https://rickandmortyapi.com/api/character/'

//Creamos la función que obtiene los datos de la api dependiendo del id del personaje a renderizar.

const getData = async (id) => {
    //Creamos la URL que solicitará los datos desde la api usando el id proporcionado. Verificamos si el id tiene valor, si lo tiene, lo concatenamos a la URL de la API, sino, deberíamos obtener todos los personajes.
    const apiURL = id ? `${API}${id}` : API
    //Realizamos la solicitud de los datos. Es importante hacerlo con un manejador de errores en caso de que la API presente algún problema.
    try{
        //Solicitamos los datos de la API. Es importante el uso del await ya que esta respuesta puede tardar.
        const response = await fetch(apiURL)
        //Transformamos la respuesta de la API a json
        const data = await response.json()
        //Devolvemos los datos.
        return data
        
    } catch(error) {
        //Mostramos el error en consola en caso de que haya ocurrido algún problema.
        console.log('Fetch error', error)
} 
    
} 

//Exportamos la función.

export default getData 