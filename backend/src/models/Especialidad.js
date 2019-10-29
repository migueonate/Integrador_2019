const { Schema, model } = require('mongoose');

const especialidadSchema = new Schema(
    {
        especialidadname: {
            type: String,
            required: true,
            unique: true,
            trim: true
        }
    }, {
        timestamps: true
    });

module.exports = model('Especialidad', especialidadSchema);