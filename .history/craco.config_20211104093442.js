const path = require("path")
const resolve = dir => path.resolve(__dirname, path)

module.exports = {
    webpack: {
        alias:{
            '@': resolve('src'),
            'components': resolve('components')
        }
    }
}