import Character from './Character';

function CharacterList(props) {
  const characterElement = props.character.map((character, index) => {
    return (
      <li key={index}>
        <Character data={character} />
      </li>
    );
  });

  return (
    <section>
      <ul>{characterElement}</ul>
    </section>
  );
}

export default CharacterList;
