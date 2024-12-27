const db = require('../models')

const albumesService = {
    getData: async function() {
        try {
            return await db.Album.findAll()
        } catch (error) {
            return "ocurrio un error"
        }
    },

    getByArtistId: async function (artistId) {
        try {
            return await db.Album.findOne({
                where: {
                    id_artista: artistId
                }
            })
        } catch (error) {
            return "ocurrio un error"
        }
    }
}

module.exports = albumesService;