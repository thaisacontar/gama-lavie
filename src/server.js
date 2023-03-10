import express from "express";
import { randomUUID } from 'node:crypto';

const app = express();

const PORT = 3333;

app.use(express.json());

var users = [];


// INSERT

app.post('/', (req, res) => {
    const { name } = req.body;

    const user = {
        name,
        id: randomUUID()
    }

    users.push(user)

    return res.status(201).json({ user })
})


// FIND ALL

app.get('/', (req, res) => {
    return res.status(200).json({ users })
})


// FIND ONE

app.get('/:id', (req, res) => {
    const { id } = req.params;

    const user = users.find(user => user.id === id);

    return res.status(200).json({ user })
})


// UPDATE

app.put('/', (req, res) => {
    const { id } = req.headers;
    const { name } = req.body;

    const user = users.find(user => user.id === id);

    user.name = name;

    return res.status(202).json({ user })
})

app.delete('/', (req, res) => {
    const { id } = req.headers;

    const indexOfUser = users.findIndex(user => user.id === id);

    users.splice(indexOfUser, 1);

    return res.status(204).send();
})

app.listen(PORT, () => {
    console.log(`Server running in localhost:${PORT}`)
})