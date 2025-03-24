import {studentsList} from "../mocks/students.mjs";

var nextId = 100;

export const getStudents = async (req, res) => {
   console.log("sending students")

   res.send({
      'status': 'ok',
      data: studentsList
   });
}
export const postStudent = async (req, res) => {
   const name = req.body.name
   console.log("posted " + name)

   const student = {id: nextId++, name: name}

   studentsList.push(student)

   res.send(student);
}

export const deleteStudent = async (req, res) => {
   const id = req.body.id
   console.log("delete " + id)

   //studentsList = studentsList.filter(item => item.id !== id)

   res.send({
      'status': 'ok',
   });
}

