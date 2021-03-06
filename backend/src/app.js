const express = require ('express');
const cors = require('cors');
const app = express();

// settings
app.set('port', process.env.PORT || 80);

// middlewares 
app.use(cors());
app.use(express.json());

// routes
app.use('/api/notes', require('./routes/notes'));
app.use('/api/empresas', require('./routes/empresas'));
app.use('/api/plans', require('./routes/plans'));
app.use('/api/servicios', require('./routes/servicios'));
app.use('/api/especialidades', require('./routes/especialidades'));

module.exports = app;