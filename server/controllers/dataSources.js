var {dataSourcesList} = require('../mocks/dataSources.js');
var nextId = 100;

module.exports.getDataSources = async (req, res) => {
    console.log("sending dataSources")

    res.send({
        'status': 'ok',
        data: dataSourcesList
    });
}

module.exports.postDataSource = async (req, res) => {
    const name = req.body.name
    console.log("posted " + name)

    const dataSource = {id: nextId++, name: name}

    dataSourcesList.push(dataSource)

    res.send(dataSource);
}

module.exports.deleteDataSource = async (req, res) => {
    const id = req.body.id
    console.log("delete " + id)

    dataSourcesList = dataSourcesList.filter(item => item.id !== id)

    res.send({
        'status': 'ok',
    });
}

