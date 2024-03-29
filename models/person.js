const mongoose = require( 'mongoose' )
mongoose.set('useFindAndModify', false)
mongoose.set( 'useCreateIndex', true )
const uniqueValidator = require('mongoose-unique-validator')

let url = process.env.MONGODB_URI

if (process.env.NODE_ENV === 'test') {
    url =  process.env.TEST_MONGODB_URI
    console.log('testing environment')
}

console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true,
    unique: true
  },
  number:{
    type: String,
    minlength: 8,
    required: true
  }
})

personSchema.plugin(uniqueValidator)

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)