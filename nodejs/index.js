const express = require('express')
const mysql2 = require('mysql2')

const PORT = 3000

const dbConnection = mysql2.createConnection({
  host: 'db',
  user: 'root',
  password: 'veryHard',
  database: 'nodejs'
})

dbConnection.query(`INSERT INTO people(name) VALUES('Fulano_${new Date().toISOString()}')`)
// dbConnection.end()

const app = express()

app.get('/', (req, res) => {

  dbConnection.query(`SELECT * FROM people`, (err, results, fields) => {
    title = `<h1>Full Cycle</h1>`
    description = `<h3>Lista de nomes cadastrada no banco de dados:</h3>`

    namesList = ''
    results.forEach(result => { namesList += `<li>${result.name}</li>` })

    page = `${title}${description}<ul>${namesList}</ul>`
    res.send(page)
  })

})

app.listen(PORT, async () => {
  console.log(`App listening on port ${PORT} ...`)
})
