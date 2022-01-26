import { Link } from 'react-router-dom';
import heart from '../images/heart.png';
import dead from '../images/dead.png';
import Icons from '../styles/layout/Icons.scss';

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
        //favicon viva
      }
    } else if (!props.data.alive) {
      if (props.data.gender === 'female') {
        return 'Muerta';
        //favicon muerta
      } else {
        return 'Muerto';
        //favicon viva
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
    }
  };

  return (
    <>
      <Link to="/">
        <button>Volver al inicio</button>
      </Link>

      <section>
        <img
          src={
            props.data.image
              ? props.data.image
              : 'https://lafrikileria.com/71944-thickbox_default/funko-pop-gigante-harry-potter-y-hedwig-45-cm-xxl.jpg'
          }
          alt={`Foto de ${props.data.name}`}
          title={`Foto de ${props.data.name}`}
        />
        <h4>{props.data.name}</h4>
        <p>
          Estatus: {renderStatus()}
          {props.data.alive ? (
            <img className="image_heart" src={heart} alt='Vivo' />
          ) : (
            <img className="image_heart" src={dead} alt='Muerto' />
          )}
        </p>
        <p>
          Especie:{' '}
          {props.data.species === 'human' ? 'Humano' : `${renderSpecies()}`}
        </p>
        <p>Género:{getGender()}</p>
        <p>Casa:{props.data.house}</p>
      </section>
    </>
  );
}

export default CharacterDetail;
