# ITCrowd Javascript Challenge

## Stack

### Backend

- Nest Framework with express
- Cloudinary for image upload
- Postgres DB
- Bcrypt for hashing password
- Passport-JWT for authentication strategy

### Frontend

- React (Vite) with typescript
- Tailwind CSS and Flowbite-react for styles
- Axios for HTTP request
- React router for routing
- React-hot-toast for some notifications

## Running instructions

### Backend

0. Set environment variables. See .env.example as an example on how to be done.

1. Set Postgres DB

```
docker-compose up -d
```

2. Run server 

```
  npm run start:dev
```

3. Seed Data. On Postman run a GET method on the following url. Doesn't require auth to make it simple and fast.

```
  http://localhost:3000/api/seed
```

### Frontend

0. Set Environment Variables. Rename .env.example to .env.

1. Run server

```
  npm run start:dev
```

There is an user created in the seed with the following credentials:
Email: admin@itcrowd.com
Password: 123456


## Production APP:

### Frontend:

```
  https://efficacious-spade-production.up.railway.app/
```

### Backend

Base Endpoint:

```
https://itcrowd-challenge-production.up.railway.app/
```

Run Seed if need it
```
https://itcrowd-challenge-production.up.railway.app/api/seed
```

# Basic Endpoints

## Products

### GET /products

Find all products. Accept Query Parameters: Offset and limit for pagination and filter for filtering by name or description. By default offset is 0 and limit is 3.

### GET /products/:id

Find product by ID.

### POST /products

Need auth
Create a product.

```
  {
    "name": "string",
    "description": "string",
    "price":"number",
    "image_url": "string",
    "brandId": "number"
  }
```

### PATCH /products/:id

Need auth
Update a product by ID.

```
  {
    "name": "string",
    "description": "string",
    "price":"number",
    "image_url": "string",
    "brandId": "number"
  }
```

### POST /products/upload

Upload image into cloudinary

Send through form/data with key file and Type file.


### DELETE /products/:id

Need auth
Delete a product by ID.

### DELETE /products

Delete all products. It's only made for easier testing with the seed. That is also a reason it doesn't require auth. 

## Seed

### GET /seed

Reset database and save 3 brands, 6 products and 1 user. 

## Brands

### GET /brands

Find all brands

### GET /brands/:id

Find brand by ID

### POST /brands

Create a brand

```
  {
    "name": "string",
    "logo_url": "string"
  }
```

### PATCH /brands/id

Update a brand by ID

```
  {
    "name": "string",
    "logo_url": "string"
  }
```


### DELETE /brands/id

Delete a brand by ID

## Auth

### POST /auth/login

Login an user

```
  {
    "email":"admin@itcrowd.com",
    "password":"123456"
  }
```

### POST /auth/register

Register a new user

```
  {
    "email":"string",
    "password":"string"
  }
```

### GET /auth/me

Need auth
Return logged in user with refreshed token.
