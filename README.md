# ITCrowd Javascript Challenge

## Backend

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

## Frontend

0. Set Environment Variables. Rename .env.example to .env.

1. Run server

```
  npm run start:dev
```

There is an user created in the seed with the following credentials:
Email: admin@itcrowd.com
Password: 123456


# Production:

## Frontend:

```
  https://efficacious-spade-production.up.railway.app/
```

## Backend

Base Endpoint:

```
https://itcrowd-challenge-production.up.railway.app/
```

Run Seed if need it
```
https://itcrowd-challenge-production.up.railway.app/api/seed
```