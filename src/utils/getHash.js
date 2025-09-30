const getHash = () => 
  location.hash.slice(1).toLowerCase().split('/')[1] || '/'
  //location.hash => devuelve el hash de la ubicación actual
  //slice(1) => devuelve la cadena a partir del index 1
  // toLocateLowerCase() => lleva la cadena a minúsculas
  //split('/') => Elimina los '/' del arreglo 
  //[1] => El resultado que se obtiene del navegador después de aplicar todos los métodos anteriores es algo parecido a este arreglo ['','1',''], es por ello que accedemos al ídice 1 al final. 
  // || '/' => si no obtiene el hash, accede a la raíz del proyecto. 
export default getHash