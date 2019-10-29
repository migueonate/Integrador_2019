const { Router } = require('express');
const router = Router();

const { getEspecialidades,createEspecialidad, deleteEspecialidad } = require('../controllers/especialidades.controller');

router.route('/')
    .get(getEspecialidades)
    .post(createEspecialidad);

router.route('/:id')
    .delete(deleteEspecialidad);

module.exports = router;