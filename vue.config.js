'use strict'
const path = require('path')
const baseSettings = require('./src/settings.js')

const name = baseSettings.title
function resolve(dir) {
    return path.join(__dirname, dir)
}
const port = process.env.port || 8080

module.exports = {
    publicPath : '/',
    assetsDir : 'static',
    lintOnSave : false,
    devServer : {
        port:port,
        open: true ,
        proxy : {
            [process.env.VUE_APP_BASE_API]: {
                target : 'http://127.0.0.1:8080/',
                ws : true,
                changeOrigin: true,
                pathRewrite : {
                    ['^' + process.env.VUE_APP_BASE_API]: ''
                }
            }
        }
    },
    configureWebpack: {
        name: name ,
        resolve: {
            alias: {
                '@' : resolve('src')
            }
        }
    }
}
