const Farm = require('../models/Farm');
const Area = require('../models/Area');

module.exports = {
    async index(req, res) {
        const { farm_id } = req.params;

        const farm = await Farm.findByPk(farm_id, {
            include: { association: 'areas' }
        });

        return res.json(farm.areas);
    },

    async store(req, res) {
        const { farm_id } = req.params;
        const { 
            area_name,
            ha,
            status,
            latitude,
            longitude,
            planting_date,
            harvest_date
        } = req.body;

        const farm = await Farm.findByPk(farm_id);

        if(!farm){
            return res.status(400).json({ farm: 'Farm not found' })
        }

        const area = await Area.create({
            area_name,
            ha,
            status,
            latitude,
            longitude,
            planting_date,
            harvest_date,
            farm_id
        });

        return res.json(area);
    }
}