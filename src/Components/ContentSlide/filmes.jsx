import React, { useContext } from "react";
import Slider from "react-slick";
import { Context } from "../../Services/Context/context"
import * as S from "./style"
export default function FilmsComponent() {
  const { apidata, setModalItem, setModalActive } = useContext(Context)
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
      <S.ComponentTitle > Filmes Populares </S.ComponentTitle>
      <Slider {...settings} style={{ width: '95%', margin: '0 auto', cursor: 'grab' }}>
        {apidata.map((data) => (
          <div key={data.id}>
            <S.FilmImg
              src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
              alt={data.title}
              onClick={() => {
                setModalActive({
                  modalFilms: true,
                  modalSeries: false,
                  isOn: false
                })
                setModalItem({
                  id: data.id,
                  title: data.title,
                  description: data.overview,
                  img: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
                  background: `https://image.tmdb.org/t/p/original/${data.backdrop_path}`,
                  popularity: data.popularity,
                  lang: data.original_language,
                  year: data.release_date,
                  component: 'FilmsComponent'
                })
                window.location.href = '#modal';
              }}
            />
          </div>
        ))}
      </Slider>
    </S.FilmsContainer>
  );
}
