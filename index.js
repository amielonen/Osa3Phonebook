const express = require('express')
const { token } = require('morgan')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
app.use(express.static('build'))
app.use(cors())

app.use(express.json())
app.use(morgan('tiny'))
morgan.token('entry', function(req, res)  {
    if (req.method === 'POST') {
        return JSON.stringify(req.body);
    }
})
app.use(morgan
    (':method :url :status :res[content-length] :response-time ms :entry'))


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
    },
    {
        id: 5,
        name: "Andy Pandy",
        number: "040-020202"
    }
]

var info = `<p> Phonebook has info for ${persons.length} people </p>`

app.get('/api/persons', (req,res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(p => p.id === id)

    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.get('/info', (request, response) => {
    date = new Date()
    response.send(info + date)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id);
    persons = persons.filter(person => person.id !== id);
    response.status(204).end();
})

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name) {
        return response.status(400).json({ error: 'name missing'})
    }

    if (!body.number) {
        return response.status(400).json({ error: 'number missing'})
    }

    for (var i = 0; i < persons.length; i++) {
        if (persons[i].name === body.name) 
        return response.status(400).json({ error: 'name taken'})
    }


    const person = {
        id: generateID(),
        name: body.name,
        number: body.number
    }
    persons = persons.concat(person)
    
    response.json(person)
})

const generateID = () => {
    const maxID = persons.length > 0
    ? Math.max(...persons.map(p => p.id))
    : 0
    return maxID+1
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});