import express from 'express'
import cors from 'cors'
import { create as memoriesCreate, index as memoriesIndex, update as memoriesUpdate, remove as memoriesRemove, show as memoriesShow } from './routes/memories.js'
import { show as usersShow, index as usersIndex } from './routes/users.js'

const app = express()
const port = 4001

app.use(express.json())
app.use(cors());

app.get('/users', usersIndex)
app.get('/users/:id', usersShow)

app.get('/memories', memoriesIndex)
app.get('/memories/:id', memoriesShow)
app.post('/memories', memoriesCreate)
app.put('/memories/:id', memoriesUpdate)
app.delete('/memories/:id', memoriesRemove)

app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})
