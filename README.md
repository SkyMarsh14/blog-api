# 📰 Blog API (Node.js)

This is a full-featured blog backend built with **Node.js**, **Express**, and **Prisma**. It powers two front-end applications:

- A **public blog site** for reading and commenting on posts.
- An **admin dashboard** for writing, editing, and managing posts.

This project demonstrates the power and flexibility of separating the backend API from the frontend interfaces.

---

## 🚀 Features

- ✅ RESTful API using Express
- ✅ JWT-based authentication and protected routes
- ✅ Posts with publish/unpublish status
- ✅ Comments with optional user data
- ✅ Role-based access (authors/admins vs. regular users)
- ✅ Admin interface for full blog management
- ✅ Frontend consumption using fetch

---

## 🛠 Tech Stack

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL (or SQLite for development)
- JSON Web Tokens (JWT)
- CORS, Helmet, dotenv
- Optional frontend: React or Vanilla JS

---

## 🧪 API Endpoints (Sample)

| Method | Route               | Access       | Description              |
| ------ | ------------------- | ------------ | ------------------------ |
| GET    | /posts              | Public       | List all published posts |
| GET    | /posts/:id          | Public       | View a single post       |
| POST   | /posts              | Auth (Admin) | Create a new post        |
| PUT    | /posts/:id          | Auth (Admin) | Update post              |
| DELETE | /posts/:id          | Auth (Admin) | Delete post              |
| POST   | /posts/:id/comments | Public       | Add a comment to a post  |
| GET    | /posts/:id/comments | Public       | Get all comments         |

---

## 🔐 Authentication

JWT is used for login sessions.  
Authenticated users attach their token in the `Authorization` header:

🌐 Front-End Integration
You can access the two front-end interfaces here:

📰 Public Blog Site: https://blogapi-user.netlify.app/

🛠 Admin Dashboard: https://blogapi-admin.netlify.app/

These frontends consume the API to display, post, and manage blog data.
