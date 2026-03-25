const express = require('express');
const app = express();
const PORT = 3000;
const errorMsg = {};
const mongoose = require('mongoose');
const status = {};

// Middleware to parse JSON bodies
app.use(express.urlencoded({extended: true}));
app.get("/api/server/status", async (req, res) => {
    const query = req.query;
    status.msg = "Server is running";
    res.json(status);
});

//MongoDB connection string
const mongoSafe = 'mongodb+srv://Zoechi_glitch:Zoechi123@cluster0.s3yciag.mongodb.net/?appName=Cluster0';

//connect to MongoDB
mongoose.connect(mongoSafe)
.then(() => console.log('connected to MongoDB'))
.catch(err => console.error('could not connect to MongoDB', err));


// Middleware to handle 404 errors
app.post("/api/submit-form", async (req, res) => {
    const body = req.body;
    console.log("Body ==" + body);
    const responseObjData = {statusCode: 201, msg:"Cat Form Submission successful"};
    res.json(responseObjData);
});

app.get('/hello-api', (req, res) => {
    res.send('Hello World, welcome to JS background programming!');
});

app.get('/hello-api-json', (req, res) => {
    res.send({ greeting: 'Hello World, from backend and server - side!' });
});

app.listen(PORT, () => {
    console.log(`Hello world API app is listening on port ` + PORT);
});


app.get("/hello-api", (req, res)=>{
    res.send("Hello World, welcome to JS backend programming!")});

    app.get("/hello-api-json", (req, res)=>{
        res.send({greeting:"Hello WWorld!, from backend and server-side!"})
    });
    app.listen(PORT, ()=>{
        console.log("Hello world API app listening on port "+PORT)
    })
