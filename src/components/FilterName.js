function FilterName(props) {
  const handleInput = (event) => {
    props.handleFilter({
      key: 'name',
      value: event.target.value,
    });
  };
  return (
    <>
      <label htmlFor="search">Busca tu personaje favorito:</label>
      <input
        type="text"
        placeholder="Ej:Voldemort."
        onChange={handleInput}
        value={props.filterName}
      />
    </>
  );
}

export default FilterName;
