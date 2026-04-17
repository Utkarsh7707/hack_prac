# Backend Auth Setup

This backend provides basic authentication APIs for signup and login using Express, MongoDB, JWT, and bcrypt.

## 1. Install dependencies

Dependencies are already added in `package.json`.

```bash
npm install
```

## 2. Configure environment

Create a `.env` file in this folder and add:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/auth_demo
JWT_SECRET=replace_with_a_long_random_secret
JWT_EXPIRES_IN=7d
```

## 3. Run the server

```bash
npm run dev
```

Or production mode:

```bash
npm start
```

## 4. Available endpoints

- Health check: `GET /api/health`
- Signup: `POST /api/auth/signup`
- Login: `POST /api/auth/login`

### Signup body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Login body

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

## 5. Success response shape

```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "<jwt_token>",
    "user": {
      "id": "<user_id>",
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
}
```
