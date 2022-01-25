function Character(props) {
  return (
    <>
      <img
        src={props.data.image}
        alt={`Foto de ${props.data.name}`}
        title={`Foto de ${props.data.name}`}
      />
      <h4>{props.data.name}</h4>
      <p>{props.data.species}</p>
    </>
  );
}

export default Character;
