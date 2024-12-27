const path = require('path');
const db = require('../../database/models');

const mediosService = require('../../database/service/mediosAPIService')

const mediosAPIController = {
    'list': async function(req, res){
        return res.send(await mediosService.getData());
    }
}
module.exports = mediosAPIController;