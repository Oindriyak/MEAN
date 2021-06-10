let userModel = require('../../models/user.model')

module.exports = {
    insert: async(req, res) => {
        let result = ''
        if (req.body) {
            
            dbResult = await userModel.insertMany(
                [{
                    "username": req.body.username,
                    "password": req.body.password,
                }]
            )
            if (dbResult)
                res.send({ status:'ok' })
            else
                res.send({ status: 'fail' })
        }
    },
	check: async(req, res) => {
        let search = req.body.username
        let result = await numberModel.find({ username: search })
        if (result){
			if(result.password==req.body.password)
				res.send({status:true ,data: ''})
			else
				res.send({status:false,data: ''})
		}            
        else
            res.send({ data: 'not found' })
    },
	get: async (req,res)=>{
		let result = await numberModel.find({ username: req.query.username })
        if (result){
			res.send({status:false})
		}
		else
			res.send({status:true})
		
	}
}