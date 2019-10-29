const { Router } = require('express');
const router = Router();

const { getServicios,createServicio, deleteServicio } = require('../controllers/servicios.controller');

router.route('/')
    .get(getServicios)
    .post(createServicio);

router.route('/:id')
    .delete(deleteServicio);

module.exports = router;