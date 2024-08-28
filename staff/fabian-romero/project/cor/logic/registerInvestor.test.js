import 'dotenv/config'
import registerInvestor from './registerInvestor.js'
import mongoose from 'mongoose'

mongoose.connect(process.env.MONGODB_URI)
    .then(() => registerInvestor('Mari', 'Trueno', 'mari@trueno.com', '987654321', 'Maritrueno', '123123123', '123123123', 'http://registrodeinvestor', 'description'))
    .then(() => console.log('User registered'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())