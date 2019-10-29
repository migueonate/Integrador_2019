const { Schema, model } = require('mongoose');

const servicioSchema = new Schema(
    {
        servicioname: {
            type: String,
            required: true,
            unique: true,
            trim: true
        }
    }, {
        timestamps: true
    });

module.exports = model('Servicio', servicioSchema);