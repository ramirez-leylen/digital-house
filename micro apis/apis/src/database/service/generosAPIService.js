const db = require('../models')

const generosService = {
    getData: async function() {
        try {
            return await db.Genero.findAll()
        } catch (error) {
            return "ocurrio un error"
        }
    }
}

module.exports = generosService;