const FormSearch = ({handleSabmit, handleChange}) => {
    return <form onSubmit={handleSabmit}>
    <label>
        <input 
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