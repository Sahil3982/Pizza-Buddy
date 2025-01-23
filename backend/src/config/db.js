import { connect } from 'mongoose';

const db = () => {
    connect('mongodb://localhost:27017/item', {
        useNewUrlParser: true, useUnifiedTopology: true
    }).then(() => {
        console.log('connected to db')
    }).catch((error) => {
        console.log(error)
    })
}

export default db