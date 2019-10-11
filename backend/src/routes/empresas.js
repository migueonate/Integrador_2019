const { Router } = require('express');
const router = Router();

const { getEmpresas,createEmpresa, deleteEmpresa } = require('../controllers/empresas.controller');

router.route('/')
    .get(getEmpresas)
    .post(createEmpresa);

router.route('/:id')
    .delete(deleteEmpresa);

module.exports = router;