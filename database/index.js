import dotenv from 'dotenv'
import express from 'express'  // 網頁伺服器
import mongoose from 'mongoose'  // MongoDB 操作套件
import bodyParser from 'body-parser' // 讀取傳入網頁伺服器的資料
// import cors from 'cors' // 跨域套件

import userRoute from './routes/users.js'
import contentRoute from './routes/contents.js'

dotenv.config()

// 資料庫連線 ,  為了解決警示訊息
mongoose.connect(process.env.MONGODB, { 
  useNewUrlParser: true,
  useUnifiedTopology: true
})
mongoose.set('useFindAndModify', false)

const app = express()

// 設定前端來的跨域請求
app.use(cors({
  // orgin 為請求來源網域，callback 為是否允許
  origin (origin, callback) {
    console.log(origin)
    // callback(錯誤訊息, 是否允許)
    // 允許全部
    callback(null, true)
    // 拒絕寫法
    // callback(new Error('不給你用'), false)
  }
}))

// 使用 bodyParser 處理 post 的資料成 json 格式
app.use(bodyParser.json())

app.use('/users', userRoute)
app.use('/contents', contentRoute)

// 建立 webserve 並在 port 執行
app.listen(process.env.PORT, () => {
  console.log('serve start ' + process.env.PORT);
})