# Address API Spec

## Create Address API
Endpoint : POST /api/contacts/:contactId/addresses

Headers :
- Authorization : token

Request Body :
```json
{
 "street" : "Jalan apa",
  "city" : "Kota apa",
  "province" : "Provinsi apa",
  "country" : "Negara apa",
  "postal_code" : "Kode Pos"
}
```
Response Body Success :
```json
{
  "data"  : {
    "id" : 1,
    "street" : "Jalan apa",
    "city" : "Kota apa",
    "province" : "Provinsi apa",
    "country" : "Negara apa",
    "postal_code" : "Kode Pos"
  }
}
```
Response Body Error :
```json
{
  "errors" : "Country is required"
}
```

## Update Address API
Endpoint : PUT /api/contacts/:contactId/addresses/:addressId

Headers :
- Authorization : token

Request Body :
```json
{
  "street" : "Jalan apa",
  "city" : "Kota apa",
  "province" : "Provinsi apa",
  "country" : "Negara apa",
  "postal_code" : "Kode Pos"
}
```
Response Body Success :
```json
{
  "data"  : {
    "id" : 1,
    "street" : "Jalan apa",
    "city" : "Kota apa",
    "province" : "Provinsi apa",
    "country" : "Negara apa",
    "postal_code" : "Kode Pos"
  }
}
```
Response Body Error :
```json
{
  "errors" : "Country is required"
}
```
## Get Address API
Endpoint : GET /api/contacts/:contactId/addresses/:addressId

Headers :
- Authorization : token


Response Body Success :
```json
{
  "data"  : {
    "id" : 1,
    "street" : "Jalan apa",
    "city" : "Kota apa",
    "province" : "Provinsi apa",
    "country" : "Negara apa",
    "postal_code" : "Kode Pos"
  }
}
```
Response Body Error :
```json
{
  "errors" : "Contact is not found"
}
```
## List Addresses API
Endpoint : GET /api/contacts/:contactId/addresses

Headers :
- Authorization : token

Response Body Success :
```json
{
  "data"  :[
    {
      "id" : 1,
      "street" : "Jalan apa",
      "city" : "Kota apa",
      "province" : "Provinsi apa",
      "country" : "Negara apa",
      "postal_code" : "Kode Pos"
    },
    {
      "id" : 2,
      "street" : "Jalan apa",
      "city" : "Kota apa",
      "province" : "Provinsi apa",
      "country" : "Negara apa",
      "postal_code" : "Kode Pos"
    }
  ]
}
```
Response Body Error :
```json
{
  "errors" : "Contact is not found"
}
```
## Remove Contact API
Endpoint : DELETE /api/contacts/:contactId/addresses/:addressId

Headers :
- Authorization : token


Response Body Success :
```json
{
  "data"  : "Ok"
}
```
Response Body Error :
```json
{
  "errors" : "Contact is not found"
}
```
