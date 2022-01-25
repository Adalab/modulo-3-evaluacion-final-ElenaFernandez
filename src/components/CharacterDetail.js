import { render } from '@testing-library/react';
import { Link } from 'react-router-dom';

function CharacterDetail(props) {
  const getGender = () => {
    return props.data.gender === 'female' ? 'Mujer' : 'Hombre';
  };

  const renderStatus = (props) => {
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
  <>
    <button><Link to="/">Volver al inicio</Link></button>

    <section>
      <img
        src={props.data.image}
        alt={`Foto de ${props.data.name}`}
        title={`Foto de ${props.data.name}`}
      />
      <h4>{props.data.name}</h4>
      <p>Estatus: {renderStatus()}</p>
      <p>Especie: {props.data.species}</p>
      <p>Género:{getGender()}</p>
      <p>Casa:{props.data.house}</p>
    </section>
  </>;
}

export default CharacterDetail;
