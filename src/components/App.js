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

  //fecth
  useEffect(() => {
    callToApi().then((data) => {
      setCharacterData(data);
    });
  }, []);
  console.log(characterData)

  return (
    <div>
      <Header />
      <Main character={characterData}/>
    </div>
  );
}

export default App;
