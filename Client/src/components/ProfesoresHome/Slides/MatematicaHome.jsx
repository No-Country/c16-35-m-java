import { Swiper, SwiperSlide } from 'swiper/react'

import {PROFESORES} from '../../../data-profesores'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import './SlideHome.scss'


function MatematicaHome() {
  return (
    <div className='matematica-container'>
      <h3>Matematica</h3>
      <Swiper
        slidesPerView={1}
        spaceBetween={200}
        modules={[Navigation]}
        className='swiper-home'
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
  <SwiperSlide>
    {PROFESORES.slice(0,3).map(profesor => {
      const { imagen, descripcion, nombre, clase, valoracion} = profesor
      return(
        <div key={nombre} className='card-profe'> 
          <img src={imagen} alt="" />
          <div className='card-profe-info' >
            <p className='profe-valoracion'>{valoracion}</p>
            <h2 className='profe-nombre'>{nombre}</h2>
            <p className='profe-descripcion'>{descripcion}</p>
            <p className='profe-clase'>{clase}</p>
            <a href='#'>Ver más</a>
          </div>
        </div>
      )
    })}
  </SwiperSlide>

  <SwiperSlide>
    {PROFESORES.slice(3,6).map(profesor => {
      const { imagen, descripcion, nombre, clase, valoracion} = profesor
      return(
        <div key={nombre} className='card-profe'> 
          <img src={imagen} alt="" />
          <div className='card-profe-info' >
            <p className='profe-valoracion'>{valoracion}</p>
            <h2 className='profe-nombre'>{nombre}</h2>
            <p className='profe-descripcion'>{descripcion}</p>
            <p className='profe-clase'>{clase}</p>
            <a href='#'>Ver más</a>
          </div>
        </div>
      )
    })}
  </SwiperSlide>
    <div className="swiper-button-next"></div> 
    <div className="swiper-button-prev"></div> 
</Swiper>
      </div>
  );
}

export default MatematicaHome;
