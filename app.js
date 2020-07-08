const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const passport = require('passport')

const connectDB = require('./config/db')

// Load config
dotenv.config({ path: './config/config.env' })


connectDB()

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// Logging
if (process.env.NODE_ENV == 'development') {
    // lsof -i :3000 -t | xargs kill
    app.use(morgan('dev'))
}



// Sessions
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Set global var
app.use(function (req, res, next) {
    res.locals.user = req.user || null
    next()
})


app.use('/vagas', require('./routes/vagas'))


const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})