const User = require('../models/User')
const Farm = require('../models/Farm')
const Area = require('../models/Area')

require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require('jwt-simple')


module.exports = {
    async store(req, res){
        const { username, pass } = req.body

        if(!username || !pass){
            return res.status(400).json('Insira todos os dados para logar!')
        }
        
        const user = await User.findOne({ where: { username } })

        
        if(user){
            const farm = await Farm.findOne({ where: { user_id: user.id } })
            const area = await Area.findAll({ where: { farm_id: farm.id } })
            if(bcrypt.compareSync(pass, user.pass)){
                const payload = { id: user.id, user: user.username, name: user.name }
                res.json({
                    name: user.name,
                    email: user.email,
                    username: user.username,
                    farm: {
                        id: farm.id,
                        name: farm.farm_name,
                        ha: farm.ha,
                        latitude: farm.latitude,
                        longitude: farm.longitude
                    },
                    area: [{ 
                        id: area.id,
                        name: area.area_name,
                        ha: area.ha,
                        latitude: area.latitude,
                        longitude: area.longitude,
                        planting_date: area.planting_date,
                        harvest_date: area.harvest_date
                    }],
                    token: jwt.encode(payload, process.env.APP_SECRET)
                })
            } else{
                return res.status(401).json('Usuário ou senha inválida')
            }
                
        } else{
            return res.status(400).json('Usuário não encontrado!')
        }
    }
}