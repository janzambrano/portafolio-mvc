let path = require('path');

let controller = {
    index: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/home.html")); // esto es lo que colocamos anteriormente cuando el proyecto no se trabajaba con rutas y controladores en app.js
    },

    about: (req,res) => {
        res.sendFile(path.join(__dirname, "../views/about.html")); // esto es lo que colocamos anteriormente cuando el proyecto no se trabajaba con rutas y controladores en app.js
    }
};

module.exports = controller;