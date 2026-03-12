# Construction Daily Progress Report (DPR) API

## Overview

This project provides a RESTful API for managing construction projects and their daily progress reports (DPR). The system allows users to register, authenticate, create projects, and submit daily work reports. It supports role-based access for administrators, managers, and workers.

The backend is built using Node.js with Express and uses MySQL as the database. Sequelize ORM is used for database interaction, and JWT authentication secures the API.

---

## Tech Stack

Backend Framework  
Node.js with Express.js

Database  
MySQL

ORM  
Sequelize

Authentication  
JSON Web Token (JWT)

Security  
bcrypt for password hashing

Environment Management  
dotenv

---

## Project Structure

```
construction-dpr-api
│
├── config
│   └── database.js
│
├── controllers
│   ├── authController.js
│   ├── projectController.js
│   └── dprController.js
│
├── middleware
│   ├── authMiddleware.js
│   └── roleMiddleware.js
│
├── models
│   ├── index.js
│   ├── user.js
│   ├── project.js
│   └── dailyReport.js
│
├── routes
│   ├── authRoutes.js
│   ├── projectRoutes.js
│   └── dprRoutes.js
│
├── server.js
├── schema.sql
├── package.json
├── .env.example
└── README.md
```

---

## Database Schema

### Users Table

| Field | Type |
|------|------|
| id | INT (Primary Key) |
| name | VARCHAR |
| email | VARCHAR (Unique) |
| password_hash | VARCHAR |
| role | ENUM (admin, manager, worker) |

### Projects Table

| Field | Type |
|------|------|
| id | INT (Primary Key) |
| name | VARCHAR |
| description | TEXT |
| start_date | DATE |
| end_date | DATE |
| status | ENUM (planned, active, completed) |
| created_by | Foreign Key → users.id |

### Daily Reports Table

| Field | Type |
|------|------|
| id | INT (Primary Key) |
| project_id | Foreign Key → projects.id |
| user_id | Foreign Key → users.id |
| date | DATE |
| work_description | TEXT |
| weather | VARCHAR |
| worker_count | INT |

---

## Installation and Setup

### 1. Clone the Repository

```bash
git clone <https://github.com/Komalkale2/construction-dpr-api.git>
cd construction-dpr-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory.

Example:

```
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
DB_NAME=construction_dpr

JWT_SECRET=mysecret
JWT_EXPIRES=1d
```

### 4. Create Database

Open MySQL and run:

```sql
CREATE DATABASE construction_dpr;
```

---

## Running the Server

Start the backend server:

```bash
node server.js
```

Expected output:

```
Database connected
Server running on port 5000
```

---

## API Endpoints

### Authentication

Register User

POST `/auth/register`

Request Body

```json
{
  "name": "Tejas",
  "email": "tejas@test.com",
  "password": "123456",
  "role": "admin"
}
```

Login User

POST `/auth/login`

Request Body

```json
{
  "email": "tejas@test.com",
  "password": "123456"
}
```

Response

```json
{
  "token": "JWT_TOKEN"
}
```

---

### Projects

Create Project

POST `/projects`

Headers

```
Authorization: Bearer <JWT_TOKEN>
```

Body

```json
{
  "name": "Bridge Construction",
  "description": "Bridge project",
  "start_date": "2026-03-01",
  "end_date": "2026-06-01",
  "status": "planned"
}
```

Get All Projects

GET `/projects`

Get Single Project

GET `/projects/:id`

Update Project

PUT `/projects/:id`

Delete Project

DELETE `/projects/:id`

---

### Daily Progress Reports (DPR)

Create DPR

POST `/projects/:id/dpr`

Body

```json
{
  "date": "2026-03-12",
  "work_description": "Foundation work completed",
  "weather": "Sunny",
  "worker_count": 15
}
```

Get DPRs for Project

GET `/projects/:id/dpr`

---

## Authentication

This API uses JWT authentication. After login, include the token in request headers.

Example:

```
Authorization: Bearer <JWT_TOKEN>
```

---

## Error Handling

The API returns standard HTTP status codes.

| Code | Description |
|------|-------------|
| 200 | Success |
| 201 | Resource Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 500 | Internal Server Error |

---

## Testing

The API can be tested using:

Postman  
PowerShell Invoke-RestMethod  
curl commands

Example login request:

```
POST http://localhost:5000/auth/login
```

---

## Future Improvements

Add Swagger API documentation  
Add request validation middleware  
Add pagination and filtering  
Add Docker support  
Add logging and monitoring

---

## License

