const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const routes = require('./routes/routes')
const session = require('express-session')

const app = express()

const generateChart = require('./helpers/generateCharts')


app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(session ({
  resave:false,
  saveUninitialized: true,
  secret: 'SOMEUSERRANDOM'
}))
// .get('/', (req, res) => res.render('pages/index'))
app.locals.generateChart = generateChart

app.use('/', routes)
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
  
