import Character from './Character';
import '../styles/layout/List.scss';

function CharacterList(props) {
  const characterElement = props.character.map((character, index) => {
    return (
      <li key={index} className="list_character">
        <Character data={character} />
      </li>
    );
  });

  return (
    <div className="container-list">
      <ul className="list">{characterElement}</ul>
    </div>
  );
}

export default CharacterList;
