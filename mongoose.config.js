const mongoose = require('mongoose');
const db_name = 'newProductDataBase'

mongoose.connect('mongodb://localhost/' + db_name, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Database connection has been established on ${db_name}`))
    .catch(err => console.log(`Something went wrong when connecting to ${db_name}`, err))


mongoose.connection.on('error', (err) => console.err(err));