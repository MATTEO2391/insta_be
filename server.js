const express = require('express')
const mongoose = require('mongoose')
const postRoute = require('./routes/posts')
const userRoute = require('./routes/user')
const loginRoutes = require('./routes/login')
const githubRoutes = require('./routes/github')
//const verifyRoutes = require('./routes/verify')
const cors = require('cors')
const path = require('path') //si usa per fare upload file, gia presente no install
const PORT = 5050;

const app = express();

//middleware
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(cors())
app.use(express.json()) 
app.use('/', postRoute)
app.use('/', userRoute)
app.use('/', loginRoutes)



mongoose.connect('mongodb+srv://metbor23:c4EWjZFAixwTf@zabusa.yzwygw5.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'error during db connection'))
db.once('open', () => {
    console.log("database caricato");
})

app.listen(PORT, () => console.log(`Server up and running ON on port ${PORT}`))  



