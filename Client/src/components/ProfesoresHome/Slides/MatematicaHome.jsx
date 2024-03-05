import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import Manzana from '../../../assets/Manzana-card.svg';
import { saveTeachers } from '../../../redux/actions/actions';

import { Navigation } from 'swiper/modules';

import './SlideHome.scss';

function MatematicaHome({ materia }) {
	const allTeachers = useSelector((state) => state.allTeachers);
	const navigate = useNavigate();

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(saveTeachers(/* subject */));
	}, [dispatch]);

	const handleVerMas = (e, id) => {
		e.preventDefault();
		navigate(`/teacher-panel/${id}`);
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
					{allTeachers.slice(3, 6).map((profesor, index) => {
						// Añadir el índice como segundo parámetro
						//const {imagePath,descriptionTeacher,name, lastname}
						const { id, imagePath, descriptionTeacher, name, lastname } =
							profesor;

						return (
							<div key={{ index }} className='card-profe'>
								{' '}
								{/* Utilizar una combinación de nombre e índice */}
								<img src={imagePath} alt='' />
								<div className='card-profe-info'>
									<div className='valoracion'>
										<img src={Manzana} alt='Icono' />
									</div>
									<h2 className='profe-nombre'>{`${name} ${lastname}`}</h2>
									<p className='profe-descripcion'>{descriptionTeacher}</p>
									<p className='profe-clase'>1ra Clase Gratis</p>
									<a
										className='profe-enlace'
										onClick={(e) => handleVerMas(e, id)}
									>
										Ver más
									</a>
								</div>
							</div>
						);
					})}
				</SwiperSlide>

				<SwiperSlide style={{ background: 'none' }}>
					{allTeachers.slice(6, 9).map((profesor, index) => {
						// Añadir el índice como segundo parámetro
						const { imagePath, descriptionTeacher, name, lastname, id } = profesor;
						return (
							<div key={{ index }} className='card-profe'>
								{' '}
								{/* Utilizar una combinación de nombre e índice */}
								<img src={imagePath} alt='' />
								<div className='card-profe-info'>
									<div className='valoracion'>
										<img src={Manzana} alt='Icono' />
									</div>
									<h2 className='profe-nombre'>{`${name} ${lastname}`}</h2>
									<p className='profe-descripcion'>{descriptionTeacher}</p>
									<p className='profe-clase'>1ra Clase Gratis</p>
									<a
										className='profe-enlace'
										onClick={(e) => handleVerMas(e, id)}
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
