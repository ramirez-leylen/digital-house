const path = require('path');
const db = require('../../database/models');

const generosService = require('../../database/service/generosAPIService')

const genresAPIController = {
    'list': async function(req, res) {
        return res.send(await generosService.getData());
    }
}
module.exports = genresAPIController;