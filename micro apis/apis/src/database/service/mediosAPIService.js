const db = require('../models')

const mediosService = {
    getData: async function() {
        try {
            return await db.Medio.findAll()
        } catch (error) {
            return "ocurrio un error"
        }
    }
}

module.exports = mediosService;