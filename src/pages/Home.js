//Importamos la utilidad que solicita la data de la API.
import getData from '../utils/getData.js'
//Transformamos nuestra fuynción a asíncrona ya que estaremos importando datos de una API, toca esperar respuesta del servidor.
const Home = async () => {
  //Creamos una constante que contendrá toda la data de los personajes.
  const characters = await getData()
  //-Modificamos el template para que sea populado por la información de la API
  //-Usamos una función map() para iterar sobre cada uno de los personajes almacenados en los personajes.
  //-Colocamos la información de cada personaje en el template.
  const view = `
    <div class="Characters">
      ${characters.results.map(character => `
      <article class="Character-item">
        <a href="#/${character.id}/">
          <img src="${character.image}" alt="${character.name}">
          <h2>${character.name}</h2>
        </a>
      </article>
      `).join('')}
    </div>
  `
  return view
}

export default Home