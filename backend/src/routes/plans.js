const { Router } = require('express');
const router = Router();

const { getPlans,createPlan, deletePlan } = require('../controllers/plans.controller');

router.route('/')
    .get(getPlans)
    .post(createPlan);

router.route('/:id')
    .delete(deletePlan);

module.exports = router;