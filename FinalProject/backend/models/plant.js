const mongoose = require("mongoose");

const plantSchema = mongoose.Schema({
    name: { type: String, required: true},
    type: { type: String },
    water: { type: String },
    light: { type: String }, 
    imageUrl: { type: String }, 
    group: { type: String }, 
});

module.exports = mongoose.model("Plant", plantSchema);