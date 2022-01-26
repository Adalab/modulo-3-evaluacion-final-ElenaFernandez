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
  //creo una variable estado para filtar por gender
  const [filterGender, setFilterGender] = useState('All');

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
    } else if (data.key === 'gender') {
      setFilterGender(data.value);
    }
  };

  const filteredCharacter = characterData
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((character) => {
      return filterGender === 'All' ? true : character.gender === filterGender;
    })
    .sort((a, b) => a.name.localeCompare(b.name));
    

  const renderCharacter = (props) => {
    const routerId = props.match.params.characterId;
    const foundCharacter = characterData.find(
      (character) => character.id === routerId
    );
    console.log(foundCharacter);
    return <CharacterDetail data={foundCharacter} />;
  };

  const resetBtn = () => {
    setFilterName('');
    setFilterHouse('gryffindor');
    setFilterGender('All');
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
              filterGender={filterGender}
              resetBtn={resetBtn}
            />
          </div>
        </Route>
        <Route path="/character/:characterId" render={renderCharacter}></Route>{' '}
      </Switch>
    </div>
  );
}

export default App;
