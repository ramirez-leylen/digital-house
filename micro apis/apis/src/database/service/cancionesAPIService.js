const db = require('../models')

const cancionesService = {
    getData: async function() {
        try {
            return await db.Cancion.findAll()
        } catch (error) {
            return "ocurrio un error"
        }
    }
}

module.exports = cancionesService;