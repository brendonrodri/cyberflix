import React from "react"
export default function FilmsPagesComponent ({titlePage, filmName, filmImage, filmPopularity}){
    return(
        <>
            <div>
                <h3>{filmName}</h3>
                <img src={filmImage} alt={filmName} />
                <p>{filmPopularity}</p>
            </div>
        </>
    )
}