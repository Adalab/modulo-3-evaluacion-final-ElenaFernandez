function FilterByGender(props) {
  const handleGender = (event) => {
    props.handleFilter({
      key: 'gender',
      value: event.currentTarget.value,
    });
  };
  return (
    <>
      <label htmlFor="gender">Escoge un género:</label>
      <select
        name="gender"
        id="gender"
        onChange={handleGender}
        value={props.filterGender}
      >
        <option value="All">Todos</option>
        <option value="female">Mujer</option>
        <option value="male">Hombre</option>
      </select>
    </>
  );
}

export default FilterByGender;
