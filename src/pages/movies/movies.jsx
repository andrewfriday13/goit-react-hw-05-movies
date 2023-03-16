const Movies =()=>{

    const handleChange =event=>{
        console.log(event.target.value)
    }

    const handleSabmit = event =>{
        event.preventDefault()
        console.log(event.currentTarget)
    }

    return <div>
       <form onSubmit={handleSabmit}>
        <label>
            <input 
             type="text"
             onChange={handleChange}
             autoComplete="off"
             autoFocus
             name="search"
             placeholder="Search movies"
            />
            <button type="submit"> search</button>
        </label>
       </form>
    </div>
 }

 export default Movies