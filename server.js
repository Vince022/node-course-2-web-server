const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3500;

let app = express();


hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine',hbs);
app.use(express.static(__dirname + '/public'));

app.use((req,res,next) => {

    let now = new Date().toDateString();

    console.log(now);
    console.log(req.method);
    console.log(req.path);
    next();
});

hbs.registerHelper('getCurrentYear',() =>{
    return new Date().getFullYear();
});

app.get('/',(req,res) => {
    res.render('home.hbs',{
        pageTitle:'Serious',
        homePage:'Welcome to My express Special'


    });

});

app.get('/about',(req,res) =>{
    res.render('about.hbs',{
        pageTitle:'About Page',
        currentYear: new Date().getFullYear()
    });
});

app.listen(port,() =>{
    console.log('Server is up on port ' + port);
});