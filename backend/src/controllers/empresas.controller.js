const empresaCtrl = {};

const Empresa = require('../models/Empresa');

empresaCtrl.getEmpresas = async (req, res) => {
    try {
        const empresas = await Empresa.find();
        res.json(empresas);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

empresaCtrl.createEmpresa = async (req, res) => {
    try {
        const { empresaname } = req.body;

        const newEmpresa = new Empresa({ empresaname });
        await newEmpresa.save();
        res.json('Empresa created');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};

empresaCtrl.deleteEmpresa = async (req, res) => {
    const { id } = req.params;
    await Empresa.findByIdAndDelete(id);
    res.json('Empresa deleted');
}

module.exports = empresaCtrl;