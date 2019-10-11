const { Schema, model } = require('mongoose');

const empresaSchema = new Schema(
    {
        empresaname: {
            type: String,
            required: true,
            unique: true,
            trim: true
        }
    }, {
        timestamps: true
    });

module.exports = model('Empresa', empresaSchema);