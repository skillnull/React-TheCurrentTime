if (process.env.NODE_ENV === 'production') {
    module.exports = require('./store.prouction')
} else {
    module.exports = require('./store.develop')
}