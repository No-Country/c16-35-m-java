import moment from 'moment';
import 'moment/locale/es';
import { useEffect, useState } from 'react';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MPButton from '../../components/MPButton/MPButton';
import { getCalendary, getReservas } from '../../redux/actions/actions';
import Logo from '../../assets/Logo.svg'
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
	const user = useSelector((state) => state.user);
	const [selectedSlot, setSelectedSlot] = useState(null);
	const [evento, setEvento] = useState([]);
	const [reservationSuccess, setReservationSuccess] = useState(false);
	let post = {};

	function formatDateToString(fecha) {
		const year = fecha.getFullYear();
		const month = String(fecha.getMonth() + 1).padStart(2, '0');
		const day = String(fecha.getDate()).padStart(2, '0');
		const hours = String(fecha.getHours()).padStart(2, '0');
		const minutes = String(fecha.getMinutes()).padStart(2, '0');
		const seconds = String(fecha.getSeconds()).padStart(2, '0');

		return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
	}

	if (selectedSlot) {
		post = {
			idCalendary: calendary.id,
			fecha: formatDateToString(selectedSlot?.start),
			idUser: user.id,
		};
	}

	const handleClose = () => {
		setSelectedSlot(null);
		setReservationSuccess(false);
	};

	useEffect(() => {
		dispatch(getReservas(idCalendary));
		dispatch(getCalendary(idTeacher));
		const startHour = new Date();
		startHour.setHours(calendary.startHour, 0, 0, 0);

		const endHour = new Date();
		endHour.setHours(calendary.endHour, 0, 0, 0);

		setWworkHours({
			start: startHour,
			end: endHour,
		});

		const eventos = [];
		for (let i = 0; i < reservas.length; i++) {
			const start = new Date(reservas[i]);
			const end = moment(start).add(1, 'hour').toDate();
			eventos.push({ start, end });
		}
		setEvento(eventos);
	}, []);

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

	const EventComponent = ({ event }) => {
		return (
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<p style={{ fontSize: '0.8rem' }}>{event.title}</p>
			</div>
		);
	};

	console.log(reservas);
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
						<div className="modal-img">
						  <img src={Logo} alt="Logo Educaflex" />
						</div>
						
						<h1>Reservar la clase</h1>
						{reservationSuccess ? (
							<p style={{ color: 'green' }}>
								¡La reserva se ha realizado con éxito!
							</p>
						) : (
							<div className='reservar'>
								<MPButton
									title={user.email}
									price={calendary.price}
									post={post}
								>
									reservar
								</MPButton>
							</div>
						)}
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
