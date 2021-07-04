import mongoose from 'mongoose'

const Schema = mongoose.Schema

const contentSchema = new Schema({
  // template: {
    // type: String
    // required: [true, '請選擇模板'] // 會有預設值，不可能空白
  // },
  title: {
    type: String,
    required: [true, '標題不能空白']
  },
  share: {
    type: Boolean
    // required: [true, '是否要分享'] // 預設為 true 要分享
  },
  img: {
    type:String
  },
  textarea: {
    type:String
  },
  text: {
    type:String
  },
  datepicker: {
    type:Date
  },
  select: {
    type:String
  },
})

// 關聯的地方名稱需相同
// ↑ users.js c_id: ref: 'contents' ↓
const contents = mongoose.model('contents', contentSchema)

export default contents