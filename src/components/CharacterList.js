import Character from './Character';
import '../styles/layout/List.scss';

function CharacterList(props) {
  const characterElement = props.character.map((character, index) => {
    return (
      <li key={index} className="container-list__character">
        <Character data={character} />
      </li>
    );
  });

  return (
    <div>
      <ul className="container-list">{characterElement}</ul>
    </div>
  );
}

export default CharacterList;
