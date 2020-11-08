const User = require('../models/User')
const Farm = require('../models/Farm')

module.exports = {
    async index(req, res){
        const { user_id } = req.params

        const user = await User.findByPk(user_id, {
            include: { association: 'farms' }
        })

        return res.json(user.farms)
    },

    async store(req, res){
        const { user_id } = req.params;
        const { farm_name, ha, latitude, longitude } = req.body

        const user = await User.findByPk(user_id)

        if(!user){
            return res.status(400).json({ user: 'User not found' })
        }

        const farm = await Farm.create({
            farm_name,
            ha,
            latitude,
            longitude,
            user_id
        })

        return res.json(farm)
    }
}