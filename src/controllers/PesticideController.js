const Pesticide = require('../models/Pesticide')
const Prague = require('../models/Prague')

module.exports = {
    async indexAll(req, res){
        const pesticides = await Pesticide.findAll()

        return res.json(pesticides)

    },

    async index(req, res){
        const { prague_id } = req.params

        const prague = await Prague.findByPk(prague_id, {
            include: { association: 'pesticides' }
        })

        return res.json(prague.pesticides)

    },

    async store(req, res){
        const { prague_id } = req.params
        const { pesticide } = req.body

        const prague = await Prague.findByPk(prague_id)

        if(!prague){
            return res.status(400).json({ pragues: 'Prague not found' })
        }
        const [ name ] = await Pesticide.findOrCreate({ 
            where: { pesticide }
         })
        
        await prague.addPesticide(name)

        return res.json(name)
    }
}