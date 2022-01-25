import CharacterList from './CharacterList';
import Filters from './Filters';

function Main(props) {
  return (
    <>
      <Filters
        searchInput={props.searchInput}
        handleFilter={props.handleFilter}
      />
      <CharacterList character={props.character} />
    </>
  );
}

export default Main;
