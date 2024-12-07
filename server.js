const express =require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const mongoose=require("mongoose");
const app =express();

app.use (bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/', (req,res)=> {
    res.send("welcome");
});
app.get('/employee_list', (req,res)=> {
    res.send("employee list");
});
app.get('/branches', (req,res)=> {
    res.send("branches");
});
app.get('/profiles', (req,res)=> {
    res.send("employee profile");
});
const dbconfig =require('./config/database.config.js');
mongoose.Promise=global.Promise;

mongoose.connect(dbConfig.url, {
    // Remove useNewUrlParser as it's no longer needed
}).then(() => {
    console.log("Database Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});

app.listen(3000,()=>{
    console.log("server is listening on port 3000");
});