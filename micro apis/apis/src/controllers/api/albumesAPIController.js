const path = require('path');
const db = require('../../database/models');

const albumesService = require('../../database/service/albumesAPIService')


const albumesAPIController = {
    'list': async function(req, res) {
        return res.send(await albumesService.getData())
    },

    'detail': async function(req, res) {
        return res.send(await albumesService.getByArtistId(req.params.id));
    }
}

module.exports = albumesAPIController;