import React from 'react'
import { Context } from '../../Services/Context/context'
import BannerComponnet from '../SlideComponent/banner'
import FilmsComponent from './filmes'
import SeriesComponent from './series'
import TopRatedComponent from './topRated'
import TopRatedSeriesComponent from './topRatedSeries'
export default function CarouselComponent() {
    const { modalActive, upcommingFilms } = React.useContext(Context)
    const upcommingData = upcommingFilms.slice(0, 1)

    return (
        <>
            {modalActive.modalFilmes || modalActive.modalSeries === true ? '' :
                <>
                    <FilmsComponent />
                    <TopRatedComponent />
                    {upcommingData.map((item) => (
                        <BannerComponnet
                            backgroundImage={upcommingData.backdrop_path}
                            slideImage={upcommingData.poster_path}
                            title={upcommingData.title}
                            overview={upcommingData.overview}
                            vote_overage={upcommingData.vote_overage}
                            popularity={upcommingData.popularity}
                            original_language={upcommingData.original_language}
                            release_date={upcommingData.release_date}
                        />
                    ))}
                    <SeriesComponent />
                    <TopRatedSeriesComponent />
                </>}
        </>
    )
}