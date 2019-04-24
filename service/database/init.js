const mongoose = require('mongoose')
const db = "mongodb://localhost/smile-vue"
const glob = require('glob')
const { resolve } = require('path')

exports.initSchemas = () => {
    glob.sync(resolve(__dirname, './schema', '**/*.js')).forEach(require)
}

exports.connect = () => {
    //连接数据库
    mongoose.connect(db)

    let maxConnectTimes = 0;

    return new Promise((resolve, reject) => {
        //增加数据库监听事件
        mongoose.connection.on('disconnected', () => {
            console.log('*********数据库断开*********')
            if (maxConnectTimes <= 3) {
                mongoose.connect(db)
                maxConnectTimes++;
            }
            else {
                reject();
                throw new Error('数据库出现问题，程序无法确认，请认为修复....')
            }
        })

        //监听数据库错误
        mongoose.connection.on('error', (err) => {
            console.log('*********数据库错误*********')
            if (maxConnectTimes <= 3) {
                mongoose.connect(db)
                maxConnectTimes++;
            }
            else {
                reject(err);
                throw new Error('数据库出现问题，程序无法确认，请认为修复....')
            }
        })

        //数据库连接成功
        mongoose.connection.on('open', () => {
            console.log('*********数据库连接成功！*********')

            resolve()
        })

    })
}