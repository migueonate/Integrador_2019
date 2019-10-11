const { Schema, model } = require('mongoose');

const planSchema = new Schema(
    {
        planname: {
            type: String,
            required: true,
            unique: true,
            trim: true
        }
    }, {
        timestamps: true
    });

module.exports = model('Plan', planSchema);