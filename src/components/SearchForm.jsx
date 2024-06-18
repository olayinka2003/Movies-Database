import { useState } from "react";

function SearchForm () {
    const [title, setTitle] = useState('')

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(title)
    }
    return (
        <div>

        <form onSubmit={handleSubmit}>
<input type="text" name="title" value={title} placeholder="Search For Your Movie Here" onChange={handleChange} />
<button type="submit">Submit</button>
        </form>
        {/* <p>{title}</p> */}
        </div>
    )
}

export default SearchForm;