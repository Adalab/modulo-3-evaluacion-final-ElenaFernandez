// Fichero src/services/api.js
const callToApi = () => {
  return fetch('http://hp-api.herokuapp.com/api/characters/house/gryffindor')
    .then((response) => response.json())
    .then((data) => {
      // Cuando responde el API podemos limpiar los datos aquí
      const cleanData = data.map((character) => {
        return {
          name: character.name,
          species: character.species,
          house: character.house,
          gender: character.gender,
          alive: character.alive,
          image: character.image,
        };
      });
      console.log(data);
      console.log(cleanData);
      return cleanData;
    });
};

export default callToApi;
