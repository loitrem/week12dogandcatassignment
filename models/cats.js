//require mongoose
const mongoose = require('mongoose'); 

//sets schema and sets fields- in this case inputs will require at least namea and color
const catsSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    age:  { type: Number, required: true },
    hadFirstCheckUp: Boolean,
    desc: {type: String}
});

//sets mongoose model in variable Fruit
const Cats = mongoose.model('cats', catsSchema);

//export fruit
module.exports = Cats;