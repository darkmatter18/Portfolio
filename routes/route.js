const dummyRoute = require('./dummyRoute')
const emailRoute = require('./emailRoute')

module.exports = (app) =>{
    dummyRoute(app);
    emailRoute(app);
}