import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

function SearchForm() {
    const [title, setTitle] = useState('');
    const { setSearchQuery } = useContext(MovieContext);

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchQuery(title);
    };


    return (
        <div className="title-search"> 
            <form onSubmit={handleSubmit} >
                {/* <input type="text" name="title" value={title} placeholder="Search For Your Movie Here" onChange={handleChange} />
                <button type="submit">Submit</button> */}
                <input type="text" name="text" placeholder="Search 'UIverse'" class="input" value={title} onChange={handleChange}/>
                
            </form>
        
        </div>
        
    )}

    export default SearchForm