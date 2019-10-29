const servicioCtrl = {};

const Servicio = require('../models/Servicio');

servicioCtrl.getServicios = async (req, res) => {
    try {
        const servicios = await Servicio.find();
        res.json(servicios);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

servicioCtrl.createServicio = async (req, res) => {
    try {
        const { servicioname } = req.body;

        const newServicio = new Servicio({ servicioname });
        await newServicio.save();
        res.json('Servicio created');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};

servicioCtrl.deleteServicio = async (req, res) => {
    const { id } = req.params;
    await Servicio.findByIdAndDelete(id);
    res.json('Servicio deleted');
}

module.exports = servicioCtrl;