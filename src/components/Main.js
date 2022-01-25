import CharacterList from './CharacterList';
import Filters from './Filters';

function Main(props) {
  return (
    <>
      <Filters
        filterName={props.filterName}
        handleFilter={props.handleFilter}
        filterHouse={props.filterHouse}
      />
      <CharacterList character={props.character} />
    </>
  );
}

export default Main;
