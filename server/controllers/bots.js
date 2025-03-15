var {botsList} = require('../mocks/bots.js');
var nextId = 100;

module.exports.getBots = async (req, res) => {
    console.log("sending bots")

    res.send({
        'status': 'ok',
        data: botsList
    });
}

module.exports.postBot = async (req, res) => {
    const name = req.body.name
    console.log("posted " + name)

    const bot = {id: nextId++, name: name}

    botsList.push(bot)

    res.send(bot);
}

module.exports.deleteBot = async (req, res) => {
    const id = req.body.id
    console.log("delete " + id)

    botsList = botsList.filter(item => item.id !== id)

    res.send({
        'status': 'ok',
    });
}

