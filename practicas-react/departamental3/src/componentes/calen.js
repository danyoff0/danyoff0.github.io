import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import 'moment-timezone';
import 'moment/locale/es';
import { db } from './configuracionfirebase/firebase';
import 'firebase/firestore';

const MyApp = () => {
  const [events, setEvents] = useState([]);
  const [newEventName, setNewEventName] = useState('');
  const [newEventDate, setNewEventDate] = useState('');
  const eventsRef = db.collection('Calendario').doc('calen').collection('events');

  useEffect(() => {
    // Inicializar Firebase
    // Crear instancia de Firestore
    const eventsRef = db.collection('Calendario').doc('calen').collection('events');

    // Obtener eventos actuales
    eventsRef.get().then((querySnapshot) => {
      const eventsArray = [];
      querySnapshot.forEach((doc) => {
        eventsArray.push({ id: doc.id, ...doc.data() });
      });
      setEvents(eventsArray);
    });
  }, []);

  const addDate = (dateString) => {
    const date = moment.tz(dateString, 'YYYY-MM-DDTHH:mm:ss', 'America/Mexico_City');
    return date.format();
  };

  // Función para agregar evento al calendario
  const addEvent = () => {
    if (newEventName && newEventDate) {
      const event = {
        name: newEventName,
        date: addDate(newEventDate),
      };
      eventsRef.add(event).then(() => {
        setNewEventName('');
        setNewEventDate('');
        getEvents();
      }).catch((error) => {
        console.error("Error al agregar evento:", error);
      });
    }
  };

  // Función para obtener eventos actuales
  const getEvents = () => {
    eventsRef.get().then((querySnapshot) => {
      const eventsArray = [];
      querySnapshot.forEach((doc) => {
        eventsArray.push({ id: doc.id, ...doc.data() });
      });
      setEvents(eventsArray);
    });
  };

  return (
    <div>
      <h1>Calendario</h1>
      <form>
        <input type="text" value={newEventName} onChange={(e) => setNewEventName(e.target.value)} placeholder="Nombre del evento" />
        <input type="date" value={newEventDate} onChange={(e) => setNewEventDate(e.target.value)} />
        <button onClick={addEvent}>Agregar evento</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Día</th>
            <th>Nombre del evento</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{new Date(event.date).toLocaleDateString()}</td>
              <td>{event.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyApp;