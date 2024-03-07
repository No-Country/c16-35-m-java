import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ManzanaItems from '../../assets/Manzana-card.svg';
import Manzana from '../../assets/Manzana.svg';
import { cleanTeacher } from '../../redux/actions/actions';
import './TeacherPanel.scss';

function TeacherPanel() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const teacherDetail = useSelector((state) => state.teacherDetail);
	console.log(teacherDetail);
	const { materia, id } = useParams();
	const { imagePath, descriptionBiography, name, lastname } = teacherDetail;

	const anunciosFiltered = teacherDetail.anuncios?.filter(
		(anuncio) => anuncio.subject === materia,
	);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	useEffect(() => {
		return () => {
			dispatch(cleanTeacher());
		};
	}, []);

	const handleReservation = () => {
		navigate(`/calendario/${teacherDetail.anuncios[0].id}/${id}`);
	};

	console.log(teacherDetail);
	return (
		<main
			style={{
				backgroundColor: '#f2f3fe',
				height: 'fit-content',
				paddingBottom: '1rem',
			}}
		>
			<div className='teacher-panel-container'>
				<div className='teacher-panel-reserva'>
					<img src={imagePath} alt={name} />
					<div className='teacher-panel-calificacion'>
						<div className='calificacion'>
							<p>Calificación</p>
							<div className='valoracion'>
								<img src={Manzana} alt='Icono' />
								<p>4.7</p>
							</div>
						</div>
						<div className='items' style={{ width: '12rem', margin: '0 auto' }}>
							<div
								className='calificacion-items'
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
									marginTop: '1rem',
								}}
							>
								<p>Predisposición</p>
								<div
									className='valoracion'
									style={{ display: 'flex', alignItems: 'center' }}
								>
									<img
										src={ManzanaItems}
										alt=''
										style={{ width: '1.5rem', height: '1.5rem' }}
									/>
									<p>4.7</p>
								</div>
							</div>
							<div
								className='calificacion-items'
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
									marginTop: '1rem',
								}}
							>
								<p>Claridad</p>
								<div
									className='valoracion'
									style={{ display: 'flex', alignItems: 'center' }}
								>
									<img
										src={ManzanaItems}
										alt=''
										style={{ width: '1.5rem', height: '1.5rem' }}
									/>
									<p>4.6</p>
								</div>
							</div>
							<div
								className='calificacion-items'
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
									marginTop: '1rem',
								}}
							>
								<p>Preparación</p>
								<div
									className='valoracion'
									style={{ display: 'flex', alignItems: 'center' }}
								>
									<img
										src={ManzanaItems}
										alt=''
										style={{ width: '1.5rem', height: '1.5rem' }}
									/>
									<p>4.8</p>
								</div>
							</div>
						</div>
						<div className='panel-reserva' style={{ marginTop: '2rem' }}>
							<div className='reserva-precio'>
								<p style={{ color: '#fccd88' }}>Precio por hora</p>
								<p style={{ color: 'white' }}>
									${anunciosFiltered ? anunciosFiltered[0].price : 'precio'}
								</p>
							</div>
							<div className='reserva-precio'>
								<p style={{ color: '#fccd88' }}>Plataformas</p>
								<p
									style={{
										color: 'white',
										fontSize: '0.9rem',
										fontWeight: '400',
									}}
								>
									Google meets <br /> Zoom
								</p>
							</div>
							<button className='reserva-btn' onClick={handleReservation}>
								Reservar clase
							</button>
						</div>
					</div>
				</div>
				<div className='teacher-panel-text'>
					<h1>
						{name} {lastname}
					</h1>
					<div className='teacher-panel-speech'>
						<h2>Sobre mi</h2>
						<p>{descriptionBiography}</p>
					</div>
					<div className='teacher-panel-speech'>
						<h2>Sobre la clase</h2>
						<p>
							{anunciosFiltered
								? anunciosFiltered[0].descriptionCurse
								: 'descriptionCurse'}
						</p>
					</div>
					<div className='teacher-panel-speech'>
						<h2>Disponibilidad</h2>
						<p>
							Aquí puedes ver que día y horarios tiene {name} disponible para
							poder planificar mejor tu agenda y reservar la clase adecuada.
						</p>
						<p>
							<strong>
								Desde el{' '}
								{anunciosFiltered
									? anunciosFiltered[0].startDate.split('-').reverse().join('-')
									: 'startDate'}{' '}
								hasta{' '}
								{anunciosFiltered
									? anunciosFiltered[0].endDate.split('-').reverse().join('-')
									: 'endDate'}{' '}
								de{' '}
								{anunciosFiltered ? anunciosFiltered[0].startHour : 'startHour'}
								:00hs hasta las{' '}
								{anunciosFiltered ? anunciosFiltered[0].endHour : 'endHour'}
								:00hs
							</strong>
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}

export default TeacherPanel;
