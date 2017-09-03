const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'build')))

app.get('/Eric_Constantinides_resume.pdf', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'Eric_Constantinides_resume.pdf'))
})

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(3010)
