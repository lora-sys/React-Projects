import React from 'react';


function Detail({selected,closeDetail}){
    return(
        <section className='detail'>
        <div className="content">
        <h2>{selected.Title}</h2>
        <span>{selected.Year}</span>
        <p className='rating'>
        Rating:{selected.imdbRating}
        </p>

        <div className='about'>
        <img src={selected.Poster} alt=""/>
        <p>{selected.Plot}</p>
        <p>{selected.Awards}</p>
        </div>
        <button
        className='close'
        onClick={closeDetail}
        >
        close
        </button>
        </div>
    </section>
    );


}
export default Detail;