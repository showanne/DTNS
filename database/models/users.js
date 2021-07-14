import mongoose from 'mongoose'  // MongoDB 操作套件
import validator from 'validator' // 驗證套件
import md5 from 'md5' // 加密套件

const Schema = mongoose.Schema

const writingItemSchema = new Schema({
  template: {
    type: String
    // required: [true, '請選擇模板'] // 會有預設值，不可能空白
  },
  c_id: {
    // Aggregation 聚合
    // c_id: 使用 contents 資料表的 _id 為欄位值
    // 查詢時可以一起帶出對應的商品資料
    type: mongoose.ObjectId,
    // 關聯的地方名稱需相同
    // ↑ contents.js const contents = mongoose.model('contents', contentSchema) ↓
    ref: 'contents'
  }
  // title: {
  //   type: String
  // },
  // content: {
  //   type: '???'
  // }
})

const writingSchema = new Schema({
  date: {
    type: Date
  },
  items: {
    // Composition 組合
    // 文章為陣列，每筆資料使用 writingItemSchema 定義的結構
    type: [writingItemSchema]
  }
})

const userSchema = new Schema({
  // 帳號
  account: {
    // 資料型態
    type: String,
    // mongoose 內建的驗證
    // 最小長度 4 與自訂的錯誤訊息
    minlength: [6, '帳號最少須 6 個字'],
    // 最大長度 10 與自訂的錯誤訊息
    maxlength: [10, '帳號最多 10 個字'],
    // 必填與自訂的錯誤訊息
    required: [true, '缺少帳號欄位'],
    // 設定不可重複，這裡的驗證無法使用自訂錯誤訊息，除非安裝套件
    unique: true
  },
  // 密碼
  password: {
    // 資料型態
    type: String,
    // 最小長度 5 與自訂的錯誤訊息
    minlength: [5, '密碼最少須 5 個字'],
    // 最大長度 10 與自訂的錯誤訊息
    maxlength: [10, '密碼最多 10 個字'],
    // 必填與自訂的錯誤訊息
    required: [true, '缺少密碼欄位']
  },
  email: {
    type: String,
    required: [true, '缺少信箱欄位'],
    unique: true,
    // 自訂驗證，安裝套件 npm i validator
    validate: {
      validator (value) {
        return validator.isEmail(value)
      },
      message: '信箱格式錯誤'
    }
  },
  writing: {
    type: [writingSchema]
  }
})

const users = mongoose.model('user', userSchema)

export default users