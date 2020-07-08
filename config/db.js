const mongooose = require('mongoose')

const connectDB = async () => {
    const conn = await mongooose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }).then(conn => {
        console.log(conn.connection.host)
    }).catch(err => {
        console.log(err)
        process.exit()
    })
}

module.exports = connectDB