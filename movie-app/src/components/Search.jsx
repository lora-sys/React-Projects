import React from 'react';
import '../Search.css'



function Search({SearchInput,search}){
    return(
        <div className='search-bar'>
        <input
        className='search'
        type="text"
        placeholder='Search for a Movie...'
        onChange={SearchInput}
        onKeyDown={(e)=>{
            if(e.key=='Enter'){
                search();
            }
        }}
        />
        </div>
    )
}
export default Search;
