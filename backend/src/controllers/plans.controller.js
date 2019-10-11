const planCtrl = {};

const Plan = require('../models/Plan');

planCtrl.getPlans = async (req, res) => {
    try {
        const plans = await Plan.find();
        res.json(plans);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

planCtrl.createPlan = async (req, res) => {
    try {
        const { planname } = req.body;

        const newPlan = new Plan({ planname });
        await newPlan.save();
        res.json('Plan created');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};

planCtrl.deletePlan = async (req, res) => {
    const { id } = req.params;
    await Plan.findByIdAndDelete(id);
    res.json('plan deleted');
}

module.exports = planCtrl;