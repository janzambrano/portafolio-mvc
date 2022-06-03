const express = require('express');

const app = express();

const path = require('path');

// Rutas
const routes = require('./routers/main') // aca requerimos la ruta creada en routers archivo main.js

app.use(routes); // aca utilizamos el archivo anteriormente requerido

// otra forma de hacer en una sola linea lo antes plateado es esta
//app.use( require('./routers/main') );


app.listen(3000, ()=> console.log('Servidor funcionando'));

app.use ( express.static( path.join(__dirname, './public')));

// Dando uso a las rutas creadas
app.use ("/", routes);

app.use ("/about", routes);