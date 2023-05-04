import React, { useContext } from "react";
import Slider from "react-slick";
import { Context } from "../../Services/Context/context"
import CardModalComponent from "../CardModalComponent "
import * as S from "./style"
export default function SeriesComponent() {
  const { apiSeriesData, modalItem, setModalItem,modalActive, setModalActive } = useContext(Context)
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "2rem",
    slidesToShow: 5,
    speed: 500,
    swipeToSlide: true
  };
 
  return (
    <S.FilmsContainer>
       {modalActive.modalSeries === true && 
          CardModalComponent(
            modalItem.title, 
            modalItem.description, 
            modalItem.img, 
            modalItem.popularity, 
            modalItem.lang, 
            modalItem.year,
            modalItem.modalIsOn
          )
        }
      {modalActive.modalSeries === true ? '':
      <S.ComponentTitle > Séries Populares </S.ComponentTitle> }
      <Slider {...settings} style={{ width: '95%', margin: '0 auto', cursor: 'grab' }}>
        {apiSeriesData.map((data) => (
          <div key={data.id}>
            <a href="#modal">
            <S.FilmImg
              src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
              alt={data.title}
              onClick={() => {
                 setModalActive({
                  modalFilms: false,
                  modalSeries: true
                })
                setModalItem({
                  title: data.title,
                  description: data.overview,
                  img:`https://image.tmdb.org/t/p/w200/${data.poster_path}`,
                  popularity: data.popularity,
                  lang: data.original_language,
                  year: data.release_date,
                })
              }}
            />
            </a>
           
          </div>
        ))}
      </Slider>
    </S.FilmsContainer>
  );
}
