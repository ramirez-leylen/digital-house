const path = require('path');
const db = require('../../database/models');

const artistasService = require('../../database/service/artistasAPIService')



const artistasAPIController = {
    list: async function(req, res) {
        return res.send(await artistasService.getData());
    },


    create: (req,res) => {
        return res.send('Puedes agregar un nuevo artista a nuestra base de datos. Para porder utilizar esta API, debes ejecutar la ruta /artistas/create/id desde la plataforma POSTMAN');
    },


    update: (req,res) => {
        return res.send('Puedes modifcar el nombre del artista en nuestra base de datos. Para porder utilizar esta API, debes ejecutar la ruta /artistas/update/id desde la plataforma POSTMAN');
    },


    destroy: (req,res) => {
        return res.send('Puedes eliminar un artista a nuestra base de datos. Para porder utilizar esta API, debes ejecutar la ruta /artistas/delete/id desde la plataforma POSTMAN');
    }
}



module.exports = artistasAPIController;