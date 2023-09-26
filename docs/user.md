# User API Spec

## Register User API
Endpoint : POST /api/users
Request Body :
```json
{
  "username" : "pzn",
  "password" : "rahasia",
  "name"  : "Programmer Zaman Now"
}
```
Response Body Success :
```json
{
  "data"  : {
    "username" : "pnz",
    "name"  : "Programmer Zaman Now"
  }
}
```
Response Body Error :
```json
{
  "errors" : "username already registered"
}
```

## Login User API
Endpoint : POST /api/users/login
Request Body :
```json
{
  "username" : "pzn",
  "password" : "rahasia"
}
```
Response Body Success :
```json
{
  "data"  : {
    "token" : "unique-token"
  }
}
```
Response Body Error :
```json
{
  "errors" : "username and passowrd wrong"
}
```

## Update User API
Endpoint : PATCH /api/users/current

Headers :
- Authorization : token

Request Body :
```json
{
 "name" : "Programmer zaman now",
  "password" : "new password"
}
```
Response Body Success :
```json
{
  "data"  : {
    "username" : "pzn",
    "name" : "Programmer zaman now"
  }
}
```
Response Body Error :
```json
{
  "errors" : "name length max 100"
}
```
## Get User API
Endpoint : GET /api/users/current

Headers :
- Authorization : token


Response Body Success :
```json
{
  "data"  : {
    "username" : "pzn",
    "name" : "Programmer zaman now"
  }
}
```
Response Body Error :
```json
{
  "errors" : "Unauthorized"
}
```
## Logout User API
Endpoint : DELETE /api/users/current

Headers :
- Authorization : token

Response Body 

Response Body Success :
```json
{
  "data"  : "Ok"
}
```

Response Body Error :
```json
{
  "errors" : "Unauthorized"
}
```