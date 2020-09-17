const port = 4000;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//Conector db
const connection = require('./database/connector');
//Controlelrs
const categoriesController = require('./categories/CategoriesController');
const articleController = require('./articles/ArticleController');
//chama os models para criar os campos da database
const Categori = require('./categories/Categories');
const Article = require('./articles/Article');

//engine renderização
app.set('view engine', 'ejs');

//static CSS JS ...
app.use(express.static('public'));

//formularios html
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//conect
connection
    .authenticate()
    .then(()=>{
        //console.log("Foi posssivel se conectar a sua base de dados !!")
    }).catch((error)=>{
        console.log(error);
    });


app.get('/', (req, res) => {
    res.render("index");
});

app.use('/',categoriesController);
app.use('/',articleController);

app.listen(port);