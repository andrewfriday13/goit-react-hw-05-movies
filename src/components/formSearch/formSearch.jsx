import css from './formStyle.module.css'

const FormSearch = ({handleSabmit, handleChange, search}) => {
    return <form onSubmit={handleSabmit} className={css.formSearch}>
    <label>
        <input 
        className={css.input}
        search={search}
         type="text"
         onChange={handleChange}
         autoComplete="off"
         placeholder="Search movies"
        />
    </label>
    <button className={css.searchBtn} type="submit"> search</button>
   </form>
}

export default FormSearch