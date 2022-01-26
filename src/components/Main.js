import CharacterList from './CharacterList';
import Filters from './Filters';
import NotFound from './NotFound';
import ResetBtn from './ResetBtn';


function Main(props) {
  const notFound = () => {
    if (props.character.length > 0) {
      return <CharacterList character={props.character} />;
    } else {
      return <NotFound/>;
    }
  };

  return (
    <>
      <Filters
        filterName={props.filterName}
        handleFilter={props.handleFilter}
        filterHouse={props.filterHouse}
      />
      <ResetBtn resetBtn={props.resetBtn}/>
      {notFound()}
      
      {/*!<CharacterList character={props.character} />*/}
    </>
  );
}

export default Main;
