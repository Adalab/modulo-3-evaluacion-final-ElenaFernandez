import FilterHouse from './FilterHouse';
import FilterName from './FilterName';

function Filters(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
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
