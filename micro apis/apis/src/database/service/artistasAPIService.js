const db = require('../models')

const artistasService = {
    getData: async function() {
        try {
            return await db.Artista.findAll()
        } catch (error) {
            return "ocurrio un error"
        }
    }
}

module.exports = artistasService;