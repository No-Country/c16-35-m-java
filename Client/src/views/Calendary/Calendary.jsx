import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import './Calendary.scss';
import axios from 'axios';

moment.locale('es'); // Cambiar la configuración regional a español
const localizer = momentLocalizer(moment);

const WORK_HOURS = {
  start: new Date(0, 0, 0, 8, 0, 0), // 8am
  end: new Date(0, 0, 0, 20, 0, 0),   // 8pm
};

const Calendary = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [studentName, setStudentName] = useState('');
  const [events, setEvents] = useState([]);

  const [evento, setEvento] = useState([])

  const [allEvent, setAllEvent] = useState([])
  
  const handleClose = () => {
    setSelectedSlot(null);
  };
  
  useEffect(() => {
    axios.get('https://c16-35-m-java.onrender.com/api/reservation/calendary/1')
      .then((response) => {
        const start = new Date(response.data); // Crear la fecha de inicio desde la respuesta de la API
        const end = moment(start).add(1, 'hour').toDate(); // Calcular la fecha de fin (1 hora después)
        const newEvent = { start, end }; // Crear el evento con la fecha de inicio y fin calculadas
        setEvento([newEvent]); // Establecer los eventos como un array que contiene el nuevo evento
  
        // Combinar los eventos 'event' y 'evento' en 'allEvent'
        setAllEvent([...events, ...evento]); // Combina los eventos 'events' y 'evento' y los establece como 'allEvent'
      })
      .catch((error) => {
        console.error('Error al obtener la fecha de inicio:', error);
      });
  }, [allEvent]);
  
  const handleReservation = () => {
    const newEvent = {
      id: Math.random().toString(36).substring(7), // Genera un ID único para el evento
      start: selectedSlot.start,
      end: moment(selectedSlot.start).add(1, 'hour').toDate(),
    };
    // Agregar el nuevo evento al estado 'events'
    setEvents([...events, newEvent]);
    // Agregar el nuevo evento a 'allEvent' también
    setAllEvent([...allEvent, newEvent]);
    setSelectedSlot(null);
    setStudentName('');
  };

  const handleSelectSlot = (slotInfo) => {
    // Verificar si la fecha seleccionada es mayor o igual a la fecha actual
    if (moment(slotInfo.start).startOf('day').isSameOrAfter(moment().startOf('day'))) {
      setSelectedSlot(slotInfo);
    } else {
      alert('No puedes seleccionar una fecha anterior a la actual.');
    }
  };

  const handleInputChange = (e) => {
    setStudentName(e.target.value);
  };

  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter((event) => event.id !== eventId));
  };

  const EventComponent = ({ event }) => {
    return (
      <div onClick={() => handleDeleteEvent(event.id)} style={{ display: 'flex', alignItems: 'center'}}>
        <p style={{ fontSize: '0.8rem' }}>{event.title}</p>
      </div>
    );
  };
  
  return (
    <div style={{ height: '95vh', width: '95vw', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop:'8rem' }}>
      <Calendar
        style={{ width: '80vw' }}
        localizer={localizer}
        events={allEvent}
        views={{ week: true }}
        defaultView={Views.WEEK}
        selectable
        onSelectSlot={handleSelectSlot}
        min={WORK_HOURS.start}
        max={WORK_HOURS.end}
        step={60} // Configura el paso de tiempo en minutos
        timeslots={1} // Configura la cantidad de ranuras de tiempo por hora
        components={{
          event: EventComponent, // Usa el componente EventComponent para renderizar los eventos
        }}
      />
      {selectedSlot && (
        <div className="contenedor-modal">
          <div className='modal' style={{ marginTop: '20px' }}>
            <h1>Reservar la clase</h1>
            <div className="reservar">
              <button className='btn-reservar' onClick={handleReservation}>Reservar</button>
            </div>
            <button className='cerrar-modal' onClick={handleClose}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendary;
