# API
## 使用者
### 新增使用者
- 請求方式 POST
- 路徑 `/users/`
```json
{
  "account": 帳號,
  "password": 密碼
}
```

### 新增訂單
- 請求方式 POST
- 路徑 `/users/<userid>/orders`
```json
{
  "items": [
    {
      "p_id": 商品_id,
      "amount": 數量
    },
  ]
}
```

### 查詢使用者所有訂單
- 請求方式 GET
- 路徑 `/users/<userid>/orders`

### 查詢指定訂單
- 請求方式 GET
- 路徑 `/users/orders/<orderid>`

### 更新指定訂單內指定商品的數量
- 請求方式 PATCH
- 路徑 `/users/orders/<orderid>`
```json
{
  "p_id": 商品_id,
  "amount": 新數量
}
```
### 刪除指定訂單
- 請求方式 DELETE
- 路徑 `/users/orders/<orderid>`

## 商品
### 新增商品
- 請求方式 POST
- 路徑 `/products/`
```json
{
  "name": 名稱,
  "price": 價格
}
```
