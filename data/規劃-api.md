# API

## 內容 contents
### 新增文章內容
- 請求方式 POST
- 路徑 `/contents/`
```json
{
  "template": 模板,
  "title": 標題,
  "share": Boolean 分享與否,
  "img": 圖片,
  "textarea": 文字,
  "text": 備註,
  "datepicker": 日期,
  "select": 選項
}
```

## 使用者 users
### 新增使用者
- 請求方式 POST
- 路徑 `/users/`
```json
{
  "account": 帳號,
  "password": 密碼,
  "email": 信箱
}
```

### 新增內容
- 請求方式 POST
- 路徑 `/users/<userid>/contents`
```json
{
  "items": [
    {
      "template": 模板名稱,
      "c_id": 內容_id
    },
  ]
}
```

### 查詢使用者所有文章
- 請求方式 GET
- 路徑 `/users/<userid>/contents`

### 查詢指定文章內的資料
- 請求方式 GET
- 路徑 `/users/contents/<contentid>`

### 更新指定文章的 模板..? (有必要??)
- 請求方式 PATCH
- 路徑 `/users/contents/<contentid>`
```json
{
  "template": 新模板名稱,
  "C_id": 內容_id
}
```

### 更新指定文章內的某筆資料
- 請求方式 PATCH
- 路徑

### 上傳檔案
- 請求方式 PATCH
- 路徑 `/users/<userid>`

### 刪除指定文章
- 請求方式 DELETE
- 路徑 `/users/contents/<contentid>`
- Authorization → Type : Bearer Token → Token : 輸入 剛剛使用者登入時 給的 jwt Token
- body → √ form-data → KEY：image √ file → VALUE：上傳圖片

### 登入
- 請求方式 POST
- 路徑 `/users/login`
```json
{
  "account": 帳號,
  "password": 密碼,
}
→ 每次登入都會產生新 jwt Token → 用於之後查詢使用者及登出用
```

### 登出
- 請求方式 DELETE
- 路徑 `/users/logout`
- Authorization → Type : Bearer Token → Token : 輸入 剛剛使用者登入時 給的 jwt Token
## 最新消息 news
