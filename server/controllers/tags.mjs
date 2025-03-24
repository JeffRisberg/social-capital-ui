import {tagsList} from "../mocks/tags.mjs";

var nextId = 100;

export const getTags = async (req, res) => {
   console.log("sending tags")

   res.send({
      'status': 'ok',
      data: tagsList
   });
}

export const postTag = async (req, res) => {
   const name = req.body.name
   console.log("posted " + name)

   const tag = {id: nextId++, name: name}

   tagsList.push(tag)

   res.send(tag);
}

export const deleteTag = async (req, res) => {
   const id = req.body.id
   console.log("delete " + id)

   //tagsList = tagsList.filter(item => item.id !== id)

   res.send({
      'status': 'ok',
   });
}

