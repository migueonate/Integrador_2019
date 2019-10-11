import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import NotesList from './components/NotesList'
import CreateNote from './components/CreateNote'
import CreateEmpresa from './components/CreateEmpresa'
import CreatePlan from './components/CreatePlan'


import './App.css';

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
      
      </div>


    </Router>
  );
}

export default App;
