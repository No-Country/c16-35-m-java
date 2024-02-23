import { Swiper, SwiperSlide } from 'swiper/react';
import Manzana from '../../../assets/Manzana.svg';
import { PROFESORES } from '../../../data-profesores';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';

import './SlideHome.scss';

function MatematicaHome({ materia }) {
	return (
		<div className='matematica-container'>
			<h3>{materia}</h3>
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
					{PROFESORES.slice(0, 3).map((profesor, index) => {
						const { imagen, descripcion, nombre, clase, valoracion } = profesor;
						const uniqueKey = `${nombre}_${index}`;
						return (
							<div key={uniqueKey} className='card-profe'>
								<img src={imagen} alt='' />
								<div className='card-profe-info'>
									<div className='valoracion'>
										<img src={Manzana} alt='Icono' />
										<p className='profe-valoracion'>{valoracion}</p>
									</div>
									<h2 className='profe-nombre'>{nombre}</h2>
									<p className='profe-descripcion'>{descripcion}</p>
									<p className='profe-clase'>{clase}</p>
									<a className='profe-enlace' href='#'>
										Ver más
									</a>
								</div>
							</div>
						);
					})}
				</SwiperSlide>

				<SwiperSlide>
					{PROFESORES.slice(3, 6).map((profesor, index) => {
						const { imagen, descripcion, nombre, clase, valoracion } = profesor;
						const uniqueKey = `${nombre}_${index}`;
						return (
							<div key={uniqueKey} className='card-profe'>
								<img src={imagen} alt='' />
								<div className='card-profe-info'>
									<div className='valoracion'>
										<img src={Manzana} alt='Icono' />
										<p className='profe-valoracion'>{valoracion}</p>
									</div>
									<h2 className='profe-nombre'>{nombre}</h2>
									<p className='profe-descripcion'>{descripcion}</p>
									<p className='profe-clase'>{clase}</p>
									<a className='profe-enlace' href='#'>
										Ver más
									</a>
								</div>
							</div>
						);
					})}
				</SwiperSlide>
				<div className='swiper-button-next' style={{ color: '#38346b' }}></div>
				<div className='swiper-button-prev' style={{ color: '#38346b' }}></div>
			</Swiper>
		</div>
	);
}

export default MatematicaHome;
