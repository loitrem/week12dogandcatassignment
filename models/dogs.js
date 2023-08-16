//require mongoose
const mongoose = require('mongoose'); 

//sets schema and sets fields- in this case inputs will require at least namea and color
const dogsSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    age:  { type: Number, required: true },
    breed: {type: String, required: true },
    desc: {type: String}
});

//sets mongoose model in variable Fruit
const Dogs = mongoose.model('dogs', dogsSchema);

//export fruit
module.exports = Dogs;