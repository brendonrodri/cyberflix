import React, { useContext, useState } from "react";
import Slider from "react-slick";
import { Context } from "../../Services/Context/context"
import CardModalComponent from "../CardModalComponent "
import * as S from "./style"
export default function FilmesComponent() {
  const { apidata, modalActive, setModalActive,modalItem, setModalItem } = useContext(Context)
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
       {modalActive && 
          CardModalComponent(
            modalItem.title, 
            modalItem.description, 
            modalItem.img, 
            modalItem.popularity, 
            modalItem.lang, 
            modalItem.year
          )
        }
      {modalActive === true ? '':
      <S.ComponentTitle > Filmes Populares </S.ComponentTitle> }
      <Slider {...settings} style={{ width: '97%', margin: '0 auto', cursor: 'grab' }}>
        {apidata.map((data) => (
          <div key={data.id}>
            <S.FilmImg
              src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
              alt={data.title}
              onClick={() => {
                setModalActive(true)
                setModalItem({
                  title: data.title,
                  description: data.overview,
                  img:`https://image.tmdb.org/t/p/w200/${data.poster_path}`,
                  popularity: data.popularity,
                  lang: data.original_language,
                  year: data.release_date
                })
              }}
            />
          </div>
        ))}
      </Slider>
    </>
  );
}
