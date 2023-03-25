const FormSearch = ({handleSabmit, handleChange, search}) => {
    return <form onSubmit={handleSabmit}>
    <label>
        <input 
        search={search}
         type="text"
         onChange={handleChange}
         autoComplete="off"
         autoFocus
         placeholder="Search movies"
        />
        <button type="submit"> search</button>
    </label>
   </form>
}

export default FormSearch