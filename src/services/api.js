import { v4 as uuidv4 } from 'uuid';
// Fichero src/services/api.js
const callToApi = (filterHouse) => {
  return fetch(`http://hp-api.herokuapp.com/api/characters/house/${filterHouse}`)
    .then((response) => response.json())
    .then((data) => {
      // Cuando responde el API podemos limpiar los datos aquí
      const cleanData = data.map((character) => {
        return {
          id: uuidv4(),
          name: character.name,
          species: character.species,
          house: character.house,
          gender: character.gender,
          alive: character.alive,
          image: character.image,
          
        };
      });
      
      return cleanData;
    });
};

export default callToApi;
