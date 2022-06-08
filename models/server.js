const express = require('express')
var cors = require('cors')


class Server {
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Middlewares
        this.middlewares();
        // Rutas
        this.routes();
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        // Lecture y parseo
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));
    }

}

module.exports = Server;