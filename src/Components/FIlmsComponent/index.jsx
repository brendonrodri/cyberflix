import React, { useContext, useState } from "react";
import Slider from "react-slick";
import { Context } from "../../Services/Context/context"
import CardModalComponent from "../CardModalComponent "
export default function FilmesComponent() {
  const [modalItem, setModalItem] = useState({
    title: undefined,
    description: undefined,
    img: undefined,
    popularity: undefined,
    lang: undefined,
    year: undefined,

  })
  const { apidata, modalActive, setModalActive } = useContext(Context)
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
      <h2 style={{ fontSize: '3rem', color: '#f3f3fe', marginLeft: '3rem', marginBottom: '2rem' }}> Filmes Populares </h2>
      {modalActive && CardModalComponent(modalItem.title, modalItem.description, modalItem.img, modalItem.popularity, modalItem.lang, modalItem.year)}
      <Slider {...settings} style={{ width: '97%', margin: '0 auto', cursor: 'grab' }}>
        {apidata.map((data) => (
          <div key={data.id}>
            <img
              style={{ width: '16vw' }}
              src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
              alt={data.title}
              onDoubleClick={() => {
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
