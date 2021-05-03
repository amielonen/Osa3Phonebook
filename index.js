const express = require('express')
const app = express()

let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23--6423122"
    }
]

var info = `<p> Phonebook has info for ${persons.length} people </p>`

app.get('/api/persons', (req,res) => {
    res.json(persons)
})

app.get('/info', (request, response) => {
    date = new Date()
    response.send(info + date)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})