import React from 'react';
import './App.css';
import Form from './components/Form';
import Estado from './components/EstadoS7';
const App = () => {
  return (
    <div className="App">
      <div className="App-content">
        <p>
          Aquí haremos nuestro TO-DO list
        </p>
        <Form />

      </div>
    </div>
  );
}
export default App;
