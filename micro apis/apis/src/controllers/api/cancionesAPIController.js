const path = require('path');
const db = require('../../database/models');

const cancionesService = require('../../database/service/cancionesAPIService')

const cancionesAPIController = {
    'list': async function(req, res) {
        return res.send(await cancionesService.getData());
    }
}
module.exports = cancionesAPIController;