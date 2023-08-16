//require express *********************************************************************************
const express = require('express');
require("dotenv").config() //for .env file - also need to install dotenv
const mongoose = require('mongoose'); //for mongodb also need to install mongoose - dosent like express-react-views
const Cats = require('./models/cats');
const Dogs = require('./models/dogs');
const methodOverride = require('method-override');

//connects express instance to variable app
const app = express();

//set port
const PORT = 3000;

//middleware **************************************************************************************

//sets engine - to be able to view jsx files
app.set('view engine', 'jsx'); //tells engine to run on jsx files/format

//starts engine
app.engine('jsx', require('express-react-views').createEngine()); //starts engine using jsx format

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/css'));

//connect to mongodb
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//after connecting opens the connection for use
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

//ROUTES **************************************************************************************

// SEED ROUTE ////////////////////////////////////

app.get('/animal/seed', async()=>{
    //deleting all current data (optional)
    // await Dogs.deleteMany({})

    //adds array of data - need to import array file
    // await Dogs.create(array here)

    //redirect to index
})


//DISPLAY VIEWS ///////////////////////////////////

// index page
app.get("/", async(req, res) => {
    const doggy = await Dogs.find({})
    const kitty = await Cats.find({})
    res.render('Index', {dogs:doggy, cats:kitty})
}); 


//add new dog form
app.get("/dogadd", (req, res) => {
    res.render("DogAdd");
});

//add new cat form
app.get("/catadd", (req, res) => {
    res.render("CatAdd");
});

//edit dog form
app.post("/dogedit/:id", async(req, res) => {
    try {
    const currentDog = await Dogs.findById(req.params.id)
    res.render("DogEdit", {currentDog: currentDog});
    } catch (err){
        console.log(err);
        res.send(err)
    }
});

//edit cat form
app.post("/catedit/:id", async(req, res) => {
    const currentCat = await Cats.findById(req.params.id)
    res.render("CatEdit", {currentCat: currentCat});
});

// SUBMITTED FORMS CREATE //////////////////////////////////////////////

//dog add submit
app.post('/dogaddsubmit', async(req, res)=>{
    await Dogs.create(req.body);   
    res.redirect(`/`);
    });

//cat add submit
app.post('/cataddsubmit', async(req, res)=>{
    if (req.body.hadCheckup=== "on") {
        req.body.hadFirstCheckUp = true;
    } else {
        req.body.hadFirstCheckUp = false;
    }
    await Cats.create(req.body);   
    res.redirect(`/`);
});

// DISPLAY FORMS UPDATE ////////////////////////////////////

//dog edit submit
app.put('/dogeditsubmit/:id', async(req, res)=>{
    await Dogs.findByIdAndUpdate(req.params.id, req.body) 
    res.redirect(`/`);
    });

//cat edit submit
app.put('/cateditsubmit', async(req, res)=>{
    if (req.body.hadCheckup=== "on") {
        req.body.hadFirstCheckUp = true;
    } else {
        req.body.hadFirstCheckUp = false;
    }
    await Cats.findByIdAndUpdate(req.body.id, req.body)   
    res.redirect(`/`);
});

// DISPLAY FORMS DELETE ////////////////////////////////////

// dog delete
app.delete('/dogdelete/:id', async(req,res)=>{
    await Dogs.findByIdAndRemove(req.params.id)
    res.redirect('/')
})

// cat delete
app.delete('/catdelete/:id', async(req,res)=>{
    await Cats.findByIdAndRemove(req.params.id)
    res.redirect('/')
})

//sets server and displays message if working **********************************************************
app.listen(PORT,(req, res)=>{
    console.log(`server is now listening on port ${PORT}`);
})