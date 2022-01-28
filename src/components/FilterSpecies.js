function FilterSpecies(props){
     const handleSpecies=(event)=>{
         props.handleFilter({
             key: 'species',
             value:event.target.value
         })
     }
    return(
        <>
        <label htmlFor="species">Filtar por Especies:</label>
        <input type="text" onChange={handleSpecies} value={props.filterSpecies}/>
        </>
    )
}

export default FilterSpecies;