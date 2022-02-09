import React from 'react';
import './MovieRow.css';


export default ({title, items}) => {
    return(
        <div className="movieRow">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
            <h2>{title}</h2>
            
            <div className="movieRow--listarea">
                <div className="movieRow--list">
                {items.results.length > 0 && items.results.map((item, key)=>(
                    <div className="movieRow--item">
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}