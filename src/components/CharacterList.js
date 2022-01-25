import Character from './Character';
import List from '../styles/layout/List.scss';
function CharacterList(props) {
  const characterElement = props.character.map((character, index) => {
    return (
      <li key={index} className="list_character">
        <Character data={character} />
      </li>
    );
  });

  return (
    <section>
      <ul className="list">{characterElement}</ul>
    </section>
  );
}

export default CharacterList;
