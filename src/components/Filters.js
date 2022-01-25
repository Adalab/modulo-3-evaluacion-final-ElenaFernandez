import FilterName from './FilterName';

function Filters(props) {
  return (
    <form>
      <FilterName
        handleFilter={props.handleFilter}
        searchInput={props.searchInput}
      />
      <label htmlFor="house">Selecciona la casa:</label>
      <select name="house" id="house">
        <option value="gryffindor">Gryffindor</option>
        <option value="hufflepuff">Hufflepuff</option>
        <option value="ravenclaw">Ravenclaw</option>
        <option value="slytherin">Slytherin</option>
      </select>
    </form>
  );
}

export default Filters;
