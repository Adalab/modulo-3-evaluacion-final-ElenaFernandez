
import '../styles/App.scss';
import callToApi from '../services/api';
import Header from './Header';
import Main from './Main';
//import ls from '../services/localStorage';
//import PropTypes from 'prop-types';

function App() {
  return (
    <div>
     <Header/>
     <Main/>
    </div>
  );
}

export default App;
