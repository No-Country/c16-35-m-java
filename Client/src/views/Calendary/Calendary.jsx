import moment from 'moment';
import 'moment/locale/es';
import { useEffect, useState } from 'react';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
	cleanCalendary,
	cleanReservas,
	getCalendary,
	getReservas,
} from '../../redux/actions/actions';
import './Calendary.scss';
moment.locale('es'); // Cambiar la configuración regional a español

const localizer = momentLocalizer(moment);

const Calendary = () => {
	const [workHours, setWworkHours] = useState({
		start: new Date(0, 0, 0, 6, 0, 0), // 8am
		end: new Date(0, 0, 0, 23, 59, 0, 0), // 8pm
	});
	const dispatch = useDispatch();
	const { idCalendary, idTeacher } = useParams();
	const calendary = useSelector((state) => state.currentCalendary);
	const reservas = useSelector((state) => state.reservas);
	const [selectedSlot, setSelectedSlot] = useState(null);
	const [studentName, setStudentName] = useState('');
	const [evento, setEvento] = useState([]);

	const handleClose = () => {
		setSelectedSlot(null);
	};

	useEffect(() => {
		dispatch(getReservas(idCalendary));
		dispatch(getCalendary(idTeacher));
	}, []);

	useEffect(() => {
		const startHour = new Date();
		startHour.setHours(calendary.startHour, 0, 0, 0);

		const endHour = new Date();
		endHour.setHours(calendary.endHour, 0, 0, 0);

		setWworkHours({
			start: startHour,
			end: endHour,
		});
		console.log(reservas);
		for (let i = 0; i < reservas.length; i++) {
			const start = new Date(reservas[i]);
			const end = moment(start).add(1, 'hour').toDate();
			const newEvent = { start, end };

			setEvento((prevEvento) => {
				return [...prevEvento, newEvent];
			});
		}
	}, [dispatch]);

	useEffect(
		() => () => {
			dispatch(cleanReservas());
			dispatch(cleanCalendary());
		},
		[],
	);

	const handleSelectSlot = (slotInfo) => {
		if (
			moment(slotInfo.start)
				.startOf('day')
				.isSameOrAfter(moment().startOf('day'))
		) {
			setSelectedSlot(slotInfo);
		} else {
			alert('No puedes seleccionar una fecha anterior a la actual.');
		}
	};

	const handleInputChange = (e) => {
		setStudentName(e.target.value);
	};

	/*   const handleReservation = () => {
    const newEvent = {
      id: Math.random().toString(36).substring(7), // Genera un ID único para el evento
      start: selectedSlot.start,
      end: moment(selectedSlot.start).add(1, 'hour').toDate(),
      title: studentName,
    };
    setEvents([...events, newEvent]);
    setSelectedSlot(null);
    setStudentName('');
    console.log(newEvent)
  };

	const handleDeleteEvent = (eventId) => {
		setEvents(events.filter((event) => event.id !== eventId));
	}; */

	const EventComponent = ({ event }) => {
		return (
			<div
				onClick={() => handleDeleteEvent(event.id)}
				style={{ display: 'flex', alignItems: 'center' }}
			>
				<p style={{ fontSize: '0.8rem' }}>{event.title}</p>
			</div>
		);
	};

	return (
		<div
			style={{
				height: '95vh',
				width: '95vw',
				position: 'relative',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				paddingTop: '8rem',
			}}
		>
			<Calendar
				style={{ width: '80vw' }}
				localizer={localizer}
				views={{ week: true }}
				defaultDate={{}}
				events={evento}
				defaultView={Views.WEEK}
				selectable
				onSelectSlot={handleSelectSlot}
				min={workHours.start}
				max={workHours.end}
				step={60}
				timeslots={1}
				components={{
					event: EventComponent,
				}}
			/>
			{selectedSlot && (
				<div className='contenedor-modal'>
					<div className='modal' style={{ marginTop: '20px' }}>
						<h1>Reservar la clase</h1>
						<div className='reservar'>
							<input
								type='text'
								placeholder='Nombre completo del alumno'
								value={studentName}
								onChange={handleInputChange}
							/>
							<button className='btn-reservar' onClick={handleReservation}>
								Reservar
							</button>
						</div>
						<button className='cerrar-modal' onClick={handleClose}>
							X
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Calendary;
