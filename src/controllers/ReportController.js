const Area = require('../models/Area')
const Prague = require('../models/Prague')
const Report = require('../models/Report')

module.exports = {
    async store (req, res) {
        const { area_id, prague_id } = req.params
        const { infested, inseticide_applied } = req.body

        const area = await Area.findByPk(area_id)
        const prague = await Prague.findByPk(prague_id)

        if(!area){
            return res.status(400).json({ error: 'Não foi possível encontrar essa área!' })
        }
        if(!prague){
            return res.status(400).json({ error: 'Não foi possível encontrar a praga!' })
        }

        const report = await Report.create({
            infested,
            inseticide_applied,
            prague_id,
            area_id,
        })

        return res.json(report)

    },
    async index (req, res) {
        
    }
}