const Prague = require('../models/Prague')
const Pesticide = require('../models/Pesticide')

module.exports = {
    async indexAll(req, res){
        const pragues = await Prague.findAll()

        return res.json(pragues)

    },

    async index(req, res){
        const { pesticide_id } = req.params

        const pesticide = await Pesticide.findByPk(pesticide_id, {
            include: { association: 'pragues' }
        })

        return res.json(pesticide.pragues)

    },

    async store(req, res){
        const { pesticide_id } = req.params
        const { prague } = req.body

        const pesticide = await Prague.findByPk(pesticide_id)

        if(!pesticide){
            return res.status(400).json({ pragues: 'Prague not found' })
        }
        const [ name ] = await Pesticide.findOrCreate({ 
            where: { prague }
         })
        
        await pesticide.addPesticide(name)

        return res.json(name)
    }
}