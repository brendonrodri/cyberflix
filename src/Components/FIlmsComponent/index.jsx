 // refatorar o componente e transformar em um componente com props
// procurar uma lógica para passar os dados da api via props 
/* 
import CardModalComponent from "../CardModalComponent "
import * as S from "./style" */
import React, {useContext} from "react";
import Slider from "react-slick";
import { Context } from "../../Services/Context/context"
export default function FilmesComponent () {
    const {apidata} = useContext(Context)
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "2rem",
        slidesToShow: 5,
        speed: 500,
        swipeToSlide: true
      }; 
    return (
      <>
        <h2 style={{color: '#f3f3fe', marginLeft: '3rem', marginBottom: '2rem'}}> Filmes Populares </h2>
        <Slider {...settings} style={{width: '97%', margin: '0 auto', cursor: 'grab'}}>
          {apidata.map((data)=>(
            <div>
                <img style={{width: '16vw'}} src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} alt={data.title}  />
            </div>
          ))}
        </Slider>
      </>
    );
}
