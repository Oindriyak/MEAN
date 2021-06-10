let listModel = require('../../models/list.model')

module.exports = {
    add: async(req, res) => {
        let result = ''
        if (req.body) {
            
            dbResult = await listModel.insertMany(
                [{
                    "title": req.body.title,
                    "value": [],
                    "show": "true",
					"username":req.body.username,
					"id":req.body.id
                }]
            )
            if (dbResult)
                res.send({status:'ok',reslt:dbResult})
            else
                res.send({status: 'fail'})
        }
    },
	
	edit: async(req, res) => {
        if (req.body)
            dbResult = await listModel.findOneAndUpdate(
			{id: req.body.id,username:req.body.username}, 
			{ $set: { value: req.body.value ,show:req.body.show} })
        
		if (dbResult)
            res.send({ status: 'ok', message: 'Found 1 document and updated it' })
        else
            res.send({ status: 'fail', message: 'No Document Found' })
    },
	
	
	
	get:async(req, res) => {
        let dbResult
		if (req.query)
            dbResult = await listModel.find(
			{ username:req.query.username})
		
        if (dbResult)
            res.send({ status: 'ok', result:dbResult })
        else
            res.send({ status: 'fail', result:'error' })
    },
	
    
}