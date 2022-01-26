import { Link } from 'react-router-dom';

function Character(props) {
  return (
    <>
      <Link to={`/character/${props.data.id}`}>
        <img
          className="image"
          src={props.data.image ? props.data.image : ('https://lafrikileria.com/71944-thickbox_default/funko-pop-gigante-harry-potter-y-hedwig-45-cm-xxl.jpg') }
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
