import React, { useContext } from "react";
import Slider from "react-slick";
import { Context } from "../../Services/Context/context"
import * as S from "./style"
export default function TopRatedSeriesComponent() {
    const { topRatedSeries, setModalItem, setModalActive } = useContext(Context)
    console.log(topRatedSeries)
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

            <S.ComponentTitle > Mais votados </S.ComponentTitle>
            <Slider {...settings} style={{ width: '95%', margin: '0 auto', cursor: 'grab' }}>
                {topRatedSeries.map((data) => (
                    <div key={data.id}>
                        <S.FilmImg
                            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                            alt={data.title}
                            onClick={() => {
                                setModalActive({
                                    modalFilms: false,
                                    modalSeries: true
                                })
                                setModalItem({
                                    id: data.id,
                                    title: data.name,
                                    description: data.overview,
                                    img: `https://image.tmdb.org/t/p/original/${data.poster_path}`,
                                    background: `https://image.tmdb.org/t/p/original/${data.backdrop_path}`,
                                    popularity: data.popularity,
                                    lang: data.original_language,
                                    year: data.release_date,
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
