require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/email',(req, res) => {
    res.send('shakshikumari215@gmail.com')
})

app.get('/login',(req, res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube',(req, res) => {
    res.send('<h2>please login at chai aur code</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})