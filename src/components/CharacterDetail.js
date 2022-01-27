import { Link } from 'react-router-dom';
import heart from '../images/heart.png';
import dead from '../images/dead.png';
import humano from '../images/humano.png';
import alien from '../images/alien.png';
import '../styles/layout/CharacterDetails.scss';
import Footer from './Footer';

function CharacterDetail(props) {
  console.log(props.data);
  const getGender = () => {
    return props.data.gender === 'female' ? 'Mujer' : 'Hombre';
  };

  const renderStatus = () => {
    if (props.data.alive) {
      if (props.data.gender === 'female') {
        return 'Viva';
      } else {
        return 'Vivo';
      }
    } else if (!props.data.alive) {
      if (props.data.gender === 'female') {
        return 'Muerta';
      } else {
        return 'Muerto';
      }
    }
  };

  const renderSpecies = () => {
    if (props.data.species === 'half-giant') {
      return 'Semi-gigante';
    } else if (props.data.species === 'werewolf') {
      return 'Hombre-lobo';
    } else if (props.data.species === 'ghost') {
      return 'Fantasma';
    } else if (props.data.species === 'human') {
      return 'Humano';
    }
  };

  return (
    <>
      <Link to="/">
        <button className="btn-back">Volver al inicio</button>
      </Link>

      <div className="container-card">
        <div className="wrapped">
          <img
            src={
              props.data.image
                ? props.data.image
                : 'https://lafrikileria.com/71944-thickbox_default/funko-pop-gigante-harry-potter-y-hedwig-45-cm-xxl.jpg'
            }
            alt={`Foto de ${props.data.name}`}
            title={`Foto de ${props.data.name}`}
            className="container-card__image"
          />
          <div className="container-card__info">
            <h4>{props.data.name}</h4>
            <p>
              Estatus: {renderStatus()}
              {props.data.alive ? (
                <img className="icon" src={heart} alt="Vivo" />
              ) : (
                <img className="icon" src={dead} alt="Muerto" />
              )}
            </p>
            <p>
              Especie: {renderSpecies()}{' '}
              {props.data.species === 'human' ? (
                <img src={humano} alt="humano" />
              ) : (
                <img src={alien} alt="alien" />
              )}
            </p>
            <p>Género: {getGender()}</p>
            <p>Casa: {props.data.house}</p>
            <p> Nombre Alternativo: {props.data.alternative_name.length === 0 ? 'No tiene' : props.data.alternative_name}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CharacterDetail;
