import getHash from '../utils/getHash.js'
import getData from '../utils/getData.js'

const Characters = async () => {
  //Obtenemos el id del personaje según su hash. Recordemos que el hash se asigna en Home.js al hacer que a.href="character.id", 
  const characterId = getHash()
  console.log(characterId)
  //Extraemos los datos de la API con el characterID
  const character = await getData(characterId)
  //Modificamos el template para colocar los datos del personaje obtenido. La forma de acceder a cada dato se encuentra en la documentación de la API.  
  const view = `
  <div class="Characters-inner">
    <article class="Characters-card">
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
    </article>
    <article class="Characters-card">
        <h3>Episodes: <span>${character.episode.length}</span></h3>
        <h3>Status: <span>${character.status}</span></h3>
        <h3>Spicies: <span>${character.species}</span></h3>
        <h3>Gender: <span>${character.gender}</span></h3>
        <h3>Origin: <span>${character.origin.name}</span></h3>
        <h3>Last location: <span>${character.location.name}</span></h3>
    </article>
  </div>
  `
  return view
}

export default Characters