import React from 'react';
import './App.css';
import StudentForm from './componentes/StudentForm';
import StudentList from './componentes/StudentList';
 
const App = () => {
  return (
    <div className="container">
      <h1>Registro de Estudiantes</h1>
      <StudentForm />
      <StudentList />
    </div>
  );
};
 
export default App;
