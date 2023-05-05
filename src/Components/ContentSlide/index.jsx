import React from 'react'
import { Context } from '../../Services/Context/context'
import FilmsComponent from './filmes'
import SeriesComponent from './series'
export default function CarouselComponent (){
    const { modalActive  } = React.useContext(Context)
    return(
        <>  
            {modalActive.modalFilmes || modalActive.modalSeries === true ? '' : 
            <>
                <FilmsComponent />
                <SeriesComponent />
            </>}
           
        </>
    )
}