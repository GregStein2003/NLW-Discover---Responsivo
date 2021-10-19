const { Router } = require("express")
const express = require("express")
const QuestionController = require("./controllers/QuestionController")
const RoomController = require("./controllers/roomController")

const route = express.Router()

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render("index", {page: 'creat-pass'}))

route.post('/creat-room', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)

route.post('/question/create/:room', QuestionController.create)
route.post('/:question/:room/:question/:action', QuestionController.index)

module.exports = route
