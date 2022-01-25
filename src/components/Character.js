import {Link} from 'react-router-dom';

function Character(props) {
  return (
    <>
    <Link to={`/character/${props.house_index}`}>
      <img
        src={props.data.image}
        alt={`Foto de ${props.data.name}`}
        title={`Foto de ${props.data.name}`}
      />
      <h4>{props.data.name}</h4>
      <p>{props.data.species}</p>
      </Link>
    </>
  );
}

export default Character;
