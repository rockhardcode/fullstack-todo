// Basic express boilerplate code
// with express.json() middleware

const express = require('express')
const { createTodo, updateTodo } = require('./types')
const { todo } = require('./db')
const cors = require('cors')
const PORT = 3000

const app = express()

app.use(express.json())
app.use(cors())

app.get('/todos', async (req, res) => {
    const todos = await todo.find({})
    res.json({
        todoList: todos
    })
})
app.post('/todo', async (req, res) => {
    const payload = req.body
    const parsedPayload = createTodo.safeParse(payload)

    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "Invalid inputs"
        })
        return
    }
    // Post in database
    await todo.create({
        title: payload.title,
        description: payload.description,
        completed: false
    })
    res.json({
        msg: 'todo created'
    })
})
app.put('/completed', async (req, res) => {
    const payload = req.body
    const parsedPayload = updateTodo.safeParse(payload)
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "Invalid inputs"
        })
        return
    }
    // Update in database
    await todo.updateOne({
        _id: payload.id,
    }, {
        completed: true
    })
    res.json({
        msg: "Successfully Updated."
    })
})
app.delete('/remove', async (req, res) => {
    const payload = req.body
    const parsedPayload = updateTodo.safeParse(payload)
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "invalid inputs"
        })
        return
    }
    // delete in database
    await todo.deleteOne({
        _id: payload.id
    })
    res.json({msg: "Deleted Successfully."})
})

app.listen(PORT, () => {
    console.log('server is running on' + PORT + 'port.')
})
