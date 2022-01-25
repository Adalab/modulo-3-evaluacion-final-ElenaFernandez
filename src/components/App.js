import { useState, useEffect } from 'react';
//import { Route, Switch, useRouteMatch, Link } from 'react-router-dom';
import '../styles/App.scss';
import callToApi from '../services/api';
import Header from './Header';
import Main from './Main';
//import ls from '../services/localStorage';
//import PropTypes from 'prop-types';

function App() {
  //creo una variable de estado para guardar el array del fecth
  const [characterData, setCharacterData] = useState([]);
  //creo una variable estado para el input
  const [searchInput, setSearchInput] = useState('');

  //fecth
  useEffect(() => {
    callToApi().then((data) => {
      setCharacterData(data);
    });
  }, []);

  const handleFilter = (data) => {
    if (data.key === 'name') {
      setSearchInput(data.value);
    }
  };

  const filteredCharacter = characterData.filter((character) => {
    return character.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <div>
      <Header />
      <Main
        character={filteredCharacter}
        searchInput={searchInput}
        handleFilter={handleFilter}
      />
    </div>
  );
}

export default App;
