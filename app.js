require("dotenv").config();
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const port = process.env.PORT || 3000;
const multer = require('multer');
const path = require("path");
const hbs = require("hbs");
//including bootstrap
app.use('/css', express.static(path.join(__dirname, './node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, './node_modules/bootstrap/dist/js')));
//including jquery
app.use('/jq', express.static(path.join(__dirname, './node_modules/jquery/dist')))
const staticpath = path.join(__dirname, './public');
const partialpath = path.join(__dirname, './templates/partials');
const templatepath = path.join(__dirname, './templates/views');
app.use(express.static(staticpath));
app.set('view engine', 'hbs');
app.set('views', templatepath);
hbs.registerPartials(partialpath);
//to get value for from
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {

    res.render('contact');
});

app.get('/header', (req, res) => {

    res.render('header');
});
app.get('/forms', (req, res) => {

    res.render('forms');
});


app.post('/sendmsg', async (req, res) => {
    const client = require('twilio')(process.env.PASS_KEY, process.env.DB);
    
    client.messages
      .create({
        body: `This message is send by ${req.body.name}. My number is ${req.body.number} .${req.body.message} `,
        to: '+91 9670913036', 
        from: '+14849699363', 
      })
      .then((message) => console.log("send")).catch((err)=>{
        console.log(err);
      });
      res.render('index');
 
   
})

app.get('/about', (req, res) => {

    res.render('about');
});
app.get('/service', (req, res) => {

    res.render('service');
});
app.listen(port, () => {
    console.log(`listening at the port ${port}`);
})


