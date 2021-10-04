const express = require('express')
const bodyParser = require ('body-parser')
const app = express()
const { body, validationResult } = require('express-validator');
const rp = require('request-promise');


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('static'));

app.get('/', function(req, res, next){
    
    
    res.send("Servidor corriendo");
    
})

app.post("/",[

  body("nombre","El nonbre es obligatorio").exists().isString(),
  body("apellido","El apellido es obligatorio").exists().isString(),
  body("dni","El valor es numerico y como maximo de 10 caracteres").isNumeric().isLength({ max: 10 }),
 
  ], function(req, res, next){
 
      const errors = validationResult(req)
     
      if (!errors.isEmpty()) {
         
          console.log(errors)
          return res.status(400).json({ errors: errors.array() });
         
        }else{
         

          const payload = req.body;
          rp({
            url: 'https://reclutamiento-14cf7.firebaseio.com/personas.json',
            method: 'POST',
            body: payload,
            json: true,

          })

          res.status(201) 
          res.send("Carga exitosa")
          console.log(req.body);
         
        }   
 
  })

app.get('/crearPersona', function(req, res, next){
  
  
  res.render("crearPersona.html")
  
  
})



app.post("/crearPersona",[

  body("nombre","El nonbre es obligatorio").exists().isString(),
  body("apellido","El apellido es obligatorio").exists().isString(),
  body("dni","El valor es numerico y como maximo de 10 caracteres").isNumeric().isLength({ max: 10 }),
 
  ], function(req, res, next){
 
      const errors = validationResult(req)
     
      if (!errors.isEmpty()) {
         
          console.log(errors)
          return res.status(400).json({ errors: errors.array() });
         
        }else{
         
          const payload = req.body;
          rp({
            url: 'https://reclutamiento-14cf7.firebaseio.com/personas.json',
            method: 'POST',
            body: payload,
            json: true,

          })

          res.status(201) 
          res.send("Carga exitosa")
          console.log(req.body);
        }   
 
  })


app.listen(3000, function(){


    console.log("Servidor corriendo en puerto 3000")
    
    
    })


