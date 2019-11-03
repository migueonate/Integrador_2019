import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import NotesList from './components/NotesList'
import CreateNote from './components/CreateNote'
import CreateEmpresa from './components/CreateEmpresa'
import CreatePlan from './components/CreatePlan'
import CreateServicio from './components/CreateServicio'
import CreateEspecialidad from './components/CreateEspecialidad'
import Home from './components/Home'
import DirectorioMedico from './components/DirectorioMedico'
import Info from './components/Info'
import MapContainer from './components/MapContainer'


import './App.css'

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Route path="/" exact component={NotesList} />
        <Route path="/edit/:id" component={CreateNote} />
        <Route path="/create" component={CreateNote} />
        <Route path="/empresa" component={CreateEmpresa} />
        <Route path="/plan" component={CreatePlan} />
        <Route path="/servicio" component={CreateServicio} />
        <Route path="/especialidad" component={CreateEspecialidad} />

      </div>
    </Router>/*


     <Router>
      <DirectorioMedico />
      <div className="container p-4">
        <Route path="/" exact component={Home} />
        <Route path="/info" component={Info} />
        <Route path="/map" component={MapContainer} />
      </div>
    </Router>*/




  );
}
export default App;


