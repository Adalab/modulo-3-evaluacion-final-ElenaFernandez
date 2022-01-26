import { useState, useEffect } from 'react';
import { Route, Switch, useRouteMatch, Link } from 'react-router-dom';
import '../styles/App.scss';
import callToApi from '../services/api';
import Header from './Header';
import Main from './Main';
import CharacterDetail from './CharacterDetail';

//import ls from '../services/localStorage';
//import PropTypes from 'prop-types';

function App() {
  //creo una variable de estado para guardar el array del fecth
  const [characterData, setCharacterData] = useState([]);
  //creo una variable estado para el input
  const [filterName, setFilterName] = useState('');
  //creo una variable estado para filtar por casa
  const [filterHouse, setFilterHouse] = useState('gryffindor');

  //fecth
  useEffect(() => {
    callToApi(filterHouse).then((data) => {
      setCharacterData(data);
    });
  }, [filterHouse]);

  const handleFilter = (data) => {
    if (data.key === 'name') {
      setFilterName(data.value);
    } else if (data.key === 'house') {
      setFilterHouse(data.value);
    }
  };

  const filteredCharacter = characterData.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  });

  const renderCharacter = (props) => {
    const routerId = props.match.params.characterId;
    const foundCharacter = characterData.find(
      (character) => character.id === routerId
    );
    console.log(foundCharacter);
    return <CharacterDetail data={foundCharacter} />;
  };

  return (
    <div className="appPage">
      <Header />
      <Switch>
        <Route path="/" exact>
          <div>
            <Main
              character={filteredCharacter}
              filterName={filterName}
              handleFilter={handleFilter}
              filterHouse={filterHouse}
            />
          </div>
        </Route>
        <Route path="/character/:characterId" render={renderCharacter}></Route>{' '}
      </Switch>
    </div>
  );
}

export default App;
