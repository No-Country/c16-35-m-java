import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DigitalClock } from '@mui/x-date-pickers/DigitalClock';
import { postAnuncio } from '../../redux/actions/actions';
import './Anuncio.scss';

function Anuncio() {
	const dispatch = useDispatch();

	const [error, setError] = useState({
		subject: '',
		descriptionCurse: '',
		startDate: '',
		endDate: '',
		startHour: '',
		endHour: ''
	});
	const user = useSelector((state) => state.user);

	const materias = [
		'Matematica',
		'Guitarra',
		'Ingles',
		'Historia',
		'Canto',
		'Italiano',
	];

	const removeAccents = (str) => {
		return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
	};

	const [anuncio, setAnuncio] = useState({
		subject: '',
		descriptionCurse: '',
		startDate: '',
		endDate: '',
		startHour: '',
		endHour: ''
	});

	console.log(anuncio)

	const handleCheckboxChange = (e) => {
		const nuevaMateriaSeleccionada = e.target.value;
		setAnuncio((prevAnuncio) => ({
			...prevAnuncio,
			subject: removeAccents(nuevaMateriaSeleccionada),
		}));
	};

	const handleStartDateChange = (e) => {
		const startDate = e.target.value;
		console.log(startDate)
		console.log(anuncio.endDate)
		if (startDate > anuncio.endDate && anuncio.endDate !== '') {
			setError(prevError => ({
				...prevError,
				startDate: 'La fecha de inicio no puede ser mayor que la fecha de finalización'
			}));
		} else {
			setAnuncio(prevAnuncio => ({
				...prevAnuncio,
				startDate,
			}));
			setError(prevError => ({
				...prevError,
				startDate: ''
			}))
		}
	};

	const handleEndDateChange = (e) => {
		const endDate = e.target.value;
		if (anuncio.startDate > endDate && anuncio.startDate !== '') {
			setError(prevError => ({
				...prevError,
				endDate: 'La fecha de fin no puede ser mayor que la fecha de inicio'
			}));
		} else {
			setAnuncio(prevAnuncio => ({
				...prevAnuncio,
				endDate,
			}));
			setError(prevError => ({
				...prevError,
				endDate: ''
			}))
		}
	};

	const handleStartClock = (time) => {
		const startHour = time.$H
		if (startHour > anuncio.endHour && anuncio.endHour !== '') {
			setError(prevError => ({
				...prevError,
				startHour: 'La hora de inicio no puede ser mayor que la hora de fin'
			}));
		} else {
			setAnuncio(prevAnuncio => ({
				...prevAnuncio,
				startHour,
			}));
			setError(prevError => ({
				...prevError,
				startHour: ''
			}));
		}
	}

	const handleEndClock = (time) => {
		const endHour = time.$H
		if (endHour < anuncio.startHour && anuncio.startHour !== '') {
			setError(prevError => ({
				...prevError,
				endHour: 'La hora de inicio no puede ser mayor que la hora de fin'
			}));
		} else {
			setAnuncio(prevAnuncio => ({
				...prevAnuncio,
				endHour,
			}));
			setError(prevError => ({
				...prevError,
				endHour: ''
			}));
		}
	}

	const handleAnuncio = () => {
		dispatch(postAnuncio(anuncio, user.id))
	};

	return (
		<main className='anuncio' style={{ backgroundColor: '#f2f3fe' }}>
			<div className='anuncio-container'>
				<h1>Elige la materia en la que quieras dar clases</h1>
				<div className='anuncio-materias'>
					{materias.map((materia) => (
						<div className='materia' key={materia}>
							<label>{materia}</label>
							<input
								type='checkbox'
								name='materia'
								value={materia}
								onChange={handleCheckboxChange}
								checked={anuncio.subject == materia}
							/>
						</div>
					))}
				</div>
				<div className='anuncio-seccion'>
					<h3>Fecha de inicio</h3>
					<input type='date' value={anuncio.startDate} onChange={handleStartDateChange} />
					{error.startDate && <p style={{ color: 'red' }}>{error.startDate}</p>}
				</div>
				<div className='anuncio-seccion'>
					<h3>Fecha de fin</h3>
					<input type='date' value={anuncio.endDate} onChange={handleEndDateChange} />
					{error.endDate && <p style={{ color: 'red' }}>{error.endDate}</p>}
				</div>
				<div className='anuncio-seccion'>
					<h3>Hora de inicio</h3>
					<DigitalClock onChange={handleStartClock} minutesStep={60} skipDisabled sx={{ width: '240px', ml: 0, height: '300px', border: 'solid 1px' }} />
					{error.startHour && <p style={{ color: 'red' }}>{error.startHour}</p>}
					<h3>Hora de fin</h3>
					<DigitalClock onChange={handleEndClock} minutesStep={60} skipDisabled sx={{ width: '240px', ml: 0, height: '300px', border: 'solid 1px' }} />
					{error.endHour && <p style={{ color: 'red' }}>{error.endHour}</p>}
				</div>

				<div className='anuncio-seccion'>
					<h1>Cuéntanos sobre las clases que deseas dar</h1>
					<textarea
						name=''
						className='anuncio-clase'
						placeholder='Describe aquí tus clases y tu acercamiento cómo profesor.'
						onChange={(e) =>
							setAnuncio({ ...anuncio, descriptionCurse: e.target.value })
						}
					></textarea>
				</div>
				<button onClick={handleAnuncio} disabled={Object.values(error).some(e => e !== '')}>Crear Anuncio</button>
			</div>
		</main>
	);
}

export default Anuncio;
