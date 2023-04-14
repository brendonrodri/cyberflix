/* // refatorar o componente e transformar em um componente com props
// procurar uma lógica para passar os dados da api via props 

import React, { useContext, useState } from "react"
import { Context } from "../../Services/Context/context"
import CardModalComponent from "../CardModalComponent "
import * as S from "./style"
export function FilmsComponet (){
    const {apidata} = useContext(Context)
    const [modal, setModal] = useState(false)
    const openModal = () => setModal(!modal)
    return(
        <>
            <S.ComponentTitle>
                <h1>Populares</h1>
            </S.ComponentTitle>
            {modal && <CardModalComponent />}
            <S.FilmsContainer>
                <S.FilmsSection>
                    {apidata.map((item)=>( 
                        <S.FilmsBox onClick={()=> openModal()}>
                            <S.FilmImg src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} 
                            />
                            <S.FilmInfos>
                                <S.FilmName>{item.title}</S.FilmName>
                                <S.FilmDate>{item.release_date}</S.FilmDate>
                            </S.FilmInfos>
                        </S.FilmsBox>
                    ))}
                </S.FilmsSection>
            </S.FilmsContainer>
        </>
        
        
    )
}


 */

/* 
import React, { useContext, useState } from "react"
import * as S from "./style"



export default function FilmesComponent(){
    const [modal, setModal] = useState(false)
    const {apidata} = useContext(Context)
    return(
        <>
       
<S.ComponentTitle>
                <h1>Populares</h1>
            </S.ComponentTitle>
            <S.FilmsContainer>
                <S.FilmsSection>
                    {apidata.map((item)=>(
                        <S.FilmsBox>
                            <p>{item.title}</p>
                            <S.FilmImg src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} 
                            />
                        </S.FilmsBox>
                    ))}
                </S.FilmsSection>
            </S.FilmsContainer>
            </>
    )
    
} */

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
                <img style={{width: '15vw'}} src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} alt={data.title}  />
            </div>
          ))}
        </Slider>
      </>
    );
}
/* export default class FilmesComponent extends Component {
    render() {
      const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
      };
      return (
        <div>
          <h2>Center Mode</h2>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      );
    }
  } */