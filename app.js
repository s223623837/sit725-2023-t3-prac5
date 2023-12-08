const express = require("express")
const { logErrors, errorHandler } =  require('./utils/errorHandler.js')
let studentRoutes = require('./routes/student.routes.js');

const app = express()
const port = process.env.port || 3000
require('./utils/dbConnection')
app.use(express.static(__dirname + '/views'))
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set('views', __dirname + '/views'); // general config
app.set('view engine', 'html');
app.get('/', function (req, res) {
    res.render('indexs.html');
})
app.use('/api/student',studentRoutes)
app.use(logErrors)
app.use(errorHandler)
app.listen(port,()=>{
    console.log(`Listening at port ${3000}`)
})