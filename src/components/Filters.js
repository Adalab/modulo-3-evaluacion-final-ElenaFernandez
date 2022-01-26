import FilterByGender from './FilterByGender';
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
      <FilterByGender
        handleFilter={props.handleFilter}
        filterGender={props.filterGender}
      />
    </form>
  );
}

export default Filters;
