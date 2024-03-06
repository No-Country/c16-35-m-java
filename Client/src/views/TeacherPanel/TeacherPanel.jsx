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
	console.log(teacherDetail);
	useEffect(() => {
		return () => {
			dispatch(cleanTeacher());
		};
	}, []);

	const handleReservation = () => {
		navigate(`/calendario/${teacherDetail.anuncios[0].id}/${id}`);
	};

	return (
		<main style={{ backgroundColor: '#f2f3fe', height: '100vh' }}>
			<div className='teacher-panel-container'>
				<div className='teacher-panel-reserva'>
					<img src={imagePath} alt={name} />
					<div className='teacher-panel-calificacion'>
						<div
							className='calificacion'
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-around',
							}}
						>
							<p>Calificacion</p>
							<div
								className='valoracion'
								style={{ display: 'flex', alignItems: 'center' }}
							>
								<p>4.7</p>
								<img
									src={Manzana}
									alt=''
									style={{ width: '1.5rem', height: '1.5rem' }}
								/>
							</div>
						</div>
						<div className='items' style={{ width: '11rem', margin: '0 auto' }}>
							<div
								className='calificacion'
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
									<p>4.7</p>
									<img
										src={ManzanaItems}
										alt=''
										style={{ width: '1.5rem', height: '1.5rem' }}
									/>
								</div>
							</div>
							<div
								className='calificacion'
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
									<p>4.7</p>
									<img
										src={ManzanaItems}
										alt=''
										style={{ width: '1.5rem', height: '1.5rem' }}
									/>
								</div>
							</div>
							<div
								className='calificacion'
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
									marginTop: '1rem',
								}}
							>
								<p>Preparacion</p>
								<div
									className='valoracion'
									style={{ display: 'flex', alignItems: 'center' }}
								>
									<p>4.7</p>
									<img
										src={ManzanaItems}
										alt=''
										style={{ width: '1.5rem', height: '1.5rem' }}
									/>
								</div>
							</div>
						</div>
						<div className='panel-reserva' style={{ marginTop: '2rem' }}>
							<p>
								Precio:{' '}
								{anunciosFiltered ? anunciosFiltered[0].price : 'precio'}
							</p>
							<button onClick={handleReservation}>Reservar clase</button>
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
								{anunciosFiltered ? anunciosFiltered[0].startDate : 'startDate'}{' '}
								hasta{' '}
								{anunciosFiltered ? anunciosFiltered[0].endDate : 'endDate'} de{' '}
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
