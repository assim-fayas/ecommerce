const mongoose = require('mongoose')
const env = require('dotenv')
env.config()

module.exports = {
    dbConnect: () => {

        mongoose.connect(process.env.DB_URL)
            .then(() => {
                console.log('database connected successfully');
            })
            .catch((error) => {
                console.log(`error in connecting database ${error}`);
            })
    }

}