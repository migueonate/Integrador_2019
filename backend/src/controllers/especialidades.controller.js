const especialidadCtrl = {};

const Especialidad = require('../models/Especialidad');

especialidadCtrl.getEspecialidades = async (req, res) => {
    try {
        const especialidades = await Especialidad.find();
        res.json(especialidades);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

especialidadCtrl.createEspecialidad = async (req, res) => {
    try {
        const { especialidadname } = req.body;

        const newEspecialidad = new Especialidad({ especialidadname });
        await newEspecialidad.save();
        res.json('Especialidad created');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};

especialidadCtrl.deleteEspecialidad = async (req, res) => {
    const { id } = req.params;
    await Especialidad.findByIdAndDelete(id);
    res.json('Especialidad deleted');
}

module.exports = especialidadCtrl;