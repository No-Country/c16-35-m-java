import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Manzana from '../../../assets/Manzana-card.svg';

import { getAnuncio } from '../../../redux/actions/actions';
import './SlideHome.scss';

function MatematicaHome({ materia, teachers }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleVerMas = (e, id, profesor) => {
		e.preventDefault();
		dispatch(getAnuncio(id, profesor));
		navigate(`/teacher-panel/${materia.toLowerCase()}/${id}`);
	};

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
				<SwiperSlide style={{ background: 'none' }}>
					{teachers?.slice(0, 3).map((profesor, index) => {
						const { id, imagePath, descriptionTeacher, name, lastname } =
							profesor;

						return (
							<div key={id || index} className='card-profe'>
								<img src={imagePath} alt='' />
								<div className='card-profe-info'>
									<div className='valoracion'>
										<img src={Manzana} alt='Icono' />
									</div>
									<h2 className='profe-nombre'>{`${name} ${lastname}`}</h2>
									<p className='profe-descripcion'>{descriptionTeacher}</p>
									<p className='profe-clase'>Primera Clase Gratis</p>
									<a
										className='profe-enlace'
										onClick={(e) => handleVerMas(e, id, profesor)}
									>
										Ver más
									</a>
								</div>
							</div>
						);
					})}
				</SwiperSlide>

				<SwiperSlide style={{ background: 'none' }}>
					{teachers?.slice(3, 6).map((profesor, index) => {
						const { id, imagePath, descriptionTeacher, name, lastname } =
							profesor;

						return (
							<div key={id || index} className='card-profe'>
								<img src={imagePath} alt='' />
								<div className='card-profe-info'>
									<div className='valoracion'>
										<img src={Manzana} alt='Icono' />
									</div>
									<h2 className='profe-nombre'>{`${name} ${lastname}`}</h2>
									<p className='profe-descripcion'>{descriptionTeacher}</p>
									<p className='profe-clase'>Primera Clase Gratis</p>
									<a
										className='profe-enlace'
										onClick={(e) => handleVerMas(e, id, profesor)}
									>
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
