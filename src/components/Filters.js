import FilterByGender from './FilterByGender';
import FilterHouse from './FilterHouse';
import FilterName from './FilterName';
import ResetBtn from './ResetBtn';
import '../styles/layout/Filter.scss';
import FilterSpecies from './FilterSpecies';

function Filters(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="container-form">
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
        <FilterSpecies
          handleFilter={props.handleFilter}
          filterSpecies={props.filterSpecies}
        />
        <ResetBtn resetBtn={props.resetBtn} />
      </form>
    </div>
  );
}

export default Filters;
