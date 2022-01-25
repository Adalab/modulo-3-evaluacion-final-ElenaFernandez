function Main() {
  return (
    <>
      <form>
        <label htmlFor="search">Busca tu personaje favorito:</label>
        <input type="text" placeholder="Ej:Voldemort." />
        <label htmlFor="house">Selecciona la casa:</label>
        <select name="house" id="house">
          <option value="gryffindor">Gryffindor</option>
          <option value="hufflepuff">Hufflepuff</option>
          <option value="ravenclaw">Ravenclaw</option>
          <option value="slytherin">Slytherin</option>
        </select>
      </form>
      <ul>
          <li>
              
          </li>
      </ul>
    </>
  );
}

export default Main;
