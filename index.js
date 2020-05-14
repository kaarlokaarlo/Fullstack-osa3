const express = require('express')
const app = express()
require('dotenv').config()
const Person = require('./models/person')

const cors = require('cors')
app.use(cors())
app.use(express.json()) 
app.use(express.static('build'))
//const morgan = require('morgan')

  
app.get('/api/persons', (req, res) => {
  Person.find({})
  .then(persons => {
      res.json(persons.map(p => p.toJSON()))
  })
  .catch(error => next(error))
})

app.get('/info', (req, res) =>{
    
    const date = Date() //new Date().toDateString()
    res.send(
        `<p>Phonebook has info of ${Person.length} people</p>` + '<br />' +  date
            )
    .catch(error => next(error))
    })


app.get('/api/persons/:id', (req,res, next) => {
    Person.findById(req.params.id)
    .then(pers =>{
        if(pers) res.json(pers.toJSON())
        else res.status(404).end()
    })
    .catch(error =>next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
    .then(result => {
        response.status(204).end()
    })
    .catch(error => next(error))
})

app.post('/api/persons', (req, res, next) =>{
    const body = req.body

    const person = new Person({ 
        name: body.name,
        number: body.number
    })

    person.save()
    .then(saved => {
        res.json(saved.toJSON())
    })  
    .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response) =>{
    const body = request.body

    const updatedPerson = {
        name: body.name,
        number: body.number
    }

    Person.findByIdAndUpdate(body.id,updatedPerson, {new: true})
        .then(person => {
            response.json(person.toJSON())
        })
        .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
    return response.status(404).send({ error: 'unknown endpoint' })
  }

  app.use(unknownEndpoint)

const errorHandler = (error, req, res, next) =>{
    console.log(error.message)
    if(error.name === 'CastError') {
        return res.status(400).send({error: 'malformated id'})
    }else if (error.name === 'ValidationError'){
        return res.status(400).json({error : error.message})
    }

    next(error)
}

app.use(errorHandler)

const port = process.env.PORT 
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})



