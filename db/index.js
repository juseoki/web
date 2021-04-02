const mongoose = require('mongoose');


const {MONGO_ID, MONGO_PASSWORD, NODE_ENV} = process.env;
const MONGO_URL = 'mongodb://${MONGO_ID}:${MONGO_PASSWORD}@lacalhost:27017/admin';
    
module.exports = () =>{
    const connect = () => {
        if(NODE_ENV !== 'production'){
            mongoose.set('debug', true);
        }
        mongoose.connect(MONGO_URL, {
            dbName: 'reactdb',
        }, (error) =>{
            if(error){
                console.log('mongodb connect error', error);                
            }else{
                console.log('mongodb connect success');
            }
        });
    }
    connect();
    console.log('3');
    mongoose.connection.on('error', (error)=>{
        console.log('mongodb connect error', error);
    });
    mongoose.connection.on('disconnected', ()=> {
        console.log('mongodb connection retry');
        connect();
    });
    
    require('./user');
};
