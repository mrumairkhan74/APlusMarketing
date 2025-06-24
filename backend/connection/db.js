require('dotenv').config()
const mongoose = require('mongoose');


const db = mongoose.connect(process.env.MONGO_URI);
db.then(() => {
    console.log('✅Connected Database')
})
db.catch((error) => {
    console.error("❌",error.message)
    process.exit(1);
})



module.exports = db