import FilterHouse from './FilterHouse';
import FilterName from './FilterName';

function Filters(props) {
  return (
    <form>
      <FilterName
        handleFilter={props.handleFilter}
        filterName={props.filterName}
      />
      <FilterHouse
        handleFilter={props.handleFilter}
        filterHouse={props.filterHouse}
      />
    </form>
  );
}

export default Filters;
