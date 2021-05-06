require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')
//const { request } = require('express')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

//morgan
app.use(morgan('tiny'))
morgan.token('entry', function(req)  {
  if (req.method === 'POST') {
    return JSON.stringify(req.body)
  }
})
app.use(morgan(':method :url :status :res[content-length] :response-time ms :entry'))

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}


//var info = `<p> Phonebook has info for ${persons.length} people </p>`

// haetaan kaikki
app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons.map(person => person.toJSON()))
  })
})

app.get('/info', (request, response, next) => {
  Person.countDocuments({})
    .then(result => {
      let info = 
        `<div>
        <p>Phonebook has info for ${result} persons</p>
        <p>${Date()}</p>
    </div>`
      response.send(info)
    }).catch (error => next(error))
})

// haetaan yksi id:llä
app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person.toJSON())
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))

})

// haetaan info
app.get('/info', (request, response) => {
  var date = new Date()
  response.send(date)
})

//poistetaan yksi
app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndDelete(request.params.id)
    .then(person => {
      response.json(person.toJSON())
    })
    .catch(error => next(error))
})

// lisätään yksi
app.post('/api/persons', (request, response, next) => {
  const body = request.body

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person.save()
    .then(savedPerson => savedPerson.toJSON())
    .then(savedAndFormattedPerson => {
      response.json(savedAndFormattedPerson)
    }) 
    .catch(error => next(error)) 
})

app.put('/api/persons/:id', (request, response, next) => {
  const person = { number: request.body.number}
  Person.findByIdAndUpdate(request.params.id, person, {new: true})
    .then(p => {
      response.json(p.toJSON())
    }).catch(error => next(error))
})



const errorHandler = (error, request, response, next) => {
  console.error(error.message)
  
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message})
  }
  
  next(error)
}
  
app.use(errorHandler)
app.use(unknownEndpoint)
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})