let numberModel = require('../../models/number.model')

module.exports = {
    square: async(req, res) => {
        let result = ''
        if (req.query && req.query.a && !isNaN(req.query.a)) {
            result = req.query.a * req.query.a
            dbResult = await numberModel.insertMany(
                [{
                    "num": result,
                    "entries": [],
                    "timeOfEntry": new Date()
                }]
            )
            if (dbResult && result)
                res.send({ actualData: result, dbData: dbResult })
            else
                res.send({ error: 'DB ERROR' })
        }
    },
    findSquare: async(req, res) => {
        let search = req.query.a
        let result = await numberModel.find({ num: search })
        if (result)
            res.send(result)
        else
            res.send({ data: 'not found' })
    },
    postSquare: async(req, res) => {
        let result = ''
        if (req.body && req.body.a && !isNaN(req.body.a)) {
            result = req.body.a * req.body.a
            dbResult = await numberModel.insertMany(
                [{
                    "num": result,
                    "entries": [],
                    "timeOfEntry": new Date()
                }]
            )
            if (dbResult && result)
                res.send({ actualData: result, dbData: dbResult })
            else
                res.send({ error: 'DB ERROR' })
        }
    },
    updateSquare: async(req, res) => {
        if (req.body && req.body.old && req.body.new && !isNaN(req.body.old) && !isNaN(req.body.new))
            dbResult = await numberModel.findOneAndUpdate({ num: req.body.old }, { $addToSet: { entries: req.body.new } })
        if (dbResult)
            res.send({ status: 'ok', message: 'Found 1 document and updated it' })
        else
            res.send({ status: 'fail', message: 'No Document Found' })
    },
    deleteSquare: async(req, res) => {
        if (req.body && req.body.a && !isNaN(req.body.a)) {
            dbResult = await numberModel.deleteOne({ num: req.body.a })
            if (dbResult) {
                if (dbResult.deletedCount > 0)
                    res.send({ status: 'ok', message: dbResult.deletedCount + ' documents deleted!!!' })
                else
                    res.send({ status: 'ok', message: 'no data to delete!!!' })
            } else
                res.send({ status: 'fail', message: 'delete operation failed' })
        }
    },
    cube: (req, res) => {
        res.send('' + req.query.a * req.query.a * req.query.a)
    },
    palindrome: (req, res) => {
        let result = ''
        if (req && req.query && req.query.data) {
            result = (req.query.data == req.query.data.split('').reverse().join(''))
        } else
            result = false
        res.send('The string is ' + (result ? '' : 'not') + ' palindrome')
    },
    login: (req, res) => {
        res.send({ status: (req && req.body && req.body.username && req.body.password && req.body.username == 'admin' && req.body.password == '123') ? true : false })
    }
}