import React, { useState, useEffect } from 'react';
import { db } from './configuracionfirebase/firebase';
import moment from 'moment-timezone';
import 'moment-timezone';
import 'moment/locale/es';
import firebase from 'firebase/compat/app';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';


const localizer = momentLocalizer(moment);

const StudentForm = () => {
  const [name, setName] = useState('');
  const [newEventName, setNewEventName] = useState('');
  const [newEventDate, setNewEventDate] = useState('');
  const [newEventTime, setNewEventTime] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const snapshot = await firebase.firestore().collection('Calendario').doc('calen').get();
        if (snapshot.exists) {
          const data = snapshot.data();
          setEvents([
            {
              title: data.Nombre,
              start: new Date(data.fecha.seconds * 1000), // Conversión de timestamp de Firestore
              end: new Date(data.fecha.seconds * 1000), // Asumiendo que el evento dura un día
              allDay: true,
              color: '#ffcc00'
            }
          ]);
        } else {
          console.log('No data available');
        }
      } catch (error) {
        setError('Error al obtener los datos: ' + error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const newEvent = {
        title: name,
        start: new Date(newEventDate + 'T' + newEventTime),
        end: new Date(newEventDate + 'T' + newEventTime), // Asumiendo que el evento dura una hora
        allDay: false,
        color: '#ffcc00'
      };

      await db.collection('Calendario').doc('calen').set({
        Nombre: newEvent.title,
        fecha: firebase.firestore.Timestamp.fromDate(newEvent.start),
        color: newEvent.color
      });

      setEvents([...events, newEvent]);
      setName('');
      setNewEventDate('');
      setNewEventTime('');
      setError(null);
      setLoading(false);
      alert('Datos guardados exitosamente!');
    } catch (error) {
      setError('Error al guardar los datos: ' + error.message);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Fecha:</label>
            <input
              type="date"
              value={newEventDate}
              onChange={(e) => setNewEventDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Hora:</label>
            <input
              type="time"
              value={newEventTime}
              onChange={(e) => setNewEventTime(e.target.value)}
              required
            />
          </div>
          {error && (
            <p style={{ color: 'red' }}>{error}</p>
          )}
          <button type="submit" disabled={loading}>
            {loading ? 'Guardando...' : 'Guardar'}
          </button>
        </form>
      </div>

      <div className="calendar">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    </div>
  );
};

export default StudentForm;
