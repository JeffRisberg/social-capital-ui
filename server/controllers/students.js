var {studentsList} = require('../mocks/students.js');
var nextId = 100;

module.exports.getStudents = async (req, res) => {
    console.log("sending students")

    res.send({
        'status': 'ok',
        data: studentsList
    });
}

module.exports.postStudent = async (req, res) => {
    const name = req.body.name
    console.log("posted " + name)

    const student = {id: nextId++, name: name}

    studentsList.push(student)

    res.send(student);
}

module.exports.deleteStudent = async (req, res) => {
    const id = req.body.id
    console.log("delete " + id)

    studentsList = studentsList.filter(item => item.id !== id)

    res.send({
        'status': 'ok',
    });
}

