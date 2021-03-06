require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');



// parse application/json
app.use(bodyParser.json())
 
app.get('/', function (req, res) {
  res.json('Hello World');
})

app.get('/usuario',function(req, res){
    res.json('get usuarios');
})

app.put('/usuario',function(req, res){
    res.json('put usuarios');
})

app.post('/usuario',function(req, res){
    let body = req.body;

    if(body.Nombre == undefined)
    {
        //res.status(400);
        res.status(400).json({
            ok: false,
            mensaje: "El nombre es necesario"
        });
    }
    else
        res.json(body);
})

app.put('/usuario/:id',function(req, res){
    let id = req.params.id;
    res.json({
        id
    })
})
 
app.listen(process.env.PORT,() => {
    console.log("Escuchando puerto",process.env.PORT);
});