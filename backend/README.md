# Blog API

A RESTful API built with Express.js and PostgreSQL that provides authentication, blog post management, and commenting functionality.

## Features

- User authentication with JWT
- Role-based access control (User, Author, Admin)
- Blog post CRUD operations
- Comment management
- PostgreSQL database with Prisma ORM

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd blogApi/backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file:

```properties
PORT=3000
DATABASE_URL="postgres://username:password@localhost:5432/blogApi"
ACCESS_TOKEN_SECRET="your_secret_key"
REFRESH_TOKEN_SECRET="your_refresh_secret"
ADMIN_PASSWORD="your_admin_password"
```

4. Run database migrations:

```bash
npx prisma migrate dev
```

5. Seed the database:

```bash
node prisma/seed.js
```

## API Endpoints

### Authentication Routes

| Method | Endpoint   | Description     |
| ------ | ---------- | --------------- |
| POST   | `/sign-up` | Create new user |
| POST   | `/`        | Validate login  |
| POST   | `/logout`  | Logout user     |

#### Sign-up Request

```json
{
  "username": "newuser",
  "password": "password123"
}
```

#### Login Request

```json
{
  "username": "existinguser",
  "password": "password123"
}
```

### Protected Routes

All routes below require JWT authentication header:

```
Authorization: Bearer <your_jwt_token>
```

### User Management

| Method | Endpoint         | Description         | Role  |
| ------ | ---------------- | ------------------- | ----- |
| GET    | `/user/profile`  | Get user profile    | Any   |
| PUT    | `/user/profile`  | Update profile      | Owner |
| GET    | `/user/posts`    | Get user's posts    | Any   |
| GET    | `/user/comments` | Get user's comments | Any   |

#### Update Profile Request

```json
{
  "username": "updatedname",
  "password": "newpassword"
}
```

#### Update Profile Response

```json
{
  "message": "Profile updated successfully",
  "user": {
    "id": 1,
    "username": "updatedname",
    "role": "USER"
  }
}
```

### Posts

| Method | Endpoint     | Description     | Role   |
| ------ | ------------ | --------------- | ------ |
| GET    | `/posts`     | Get all posts   | Any    |
| GET    | `/posts/:id` | Get single post | Any    |
| POST   | `/posts`     | Create post     | Author |
| PUT    | `/posts/:id` | Update post     | Author |
| DELETE | `/posts/:id` | Delete post     | Author |

### Comments

| Method | Endpoint                      | Description       | Role  |
| ------ | ----------------------------- | ----------------- | ----- |
| GET    | `/posts/:postId/comments`     | Get post comments | Any   |
| POST   | `/posts/:postId/comments`     | Add comment       | Any   |
| PUT    | `/posts/:postId/comments/:id` | Update comment    | Owner |
| DELETE | `/posts/:postId/comments/:id` | Delete comment    | Owner |

## Error Handling

The API uses standard HTTP status codes:

- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Server Error

Error Response Format:

```json
{
  "error": "Error description"
}
```

## Development

### Running the Server

```bash
npm run dev
```

The server will start on `http://localhost:3000`

### Database Management

Generate Prisma client:

```bash
npx prisma generate
```

Reset database:

```bash
npx prisma db reset
```

## Testing

Run tests:

```bash
npm test
```

## Project Structure

```
backend/
├── config/         # Configuration files
├── controllers/    # Route controllers
├── db/            # Database setup
├── lib/           # Utility functions
├── middleware/    # Custom middleware
├── prisma/        # Database schema and migrations
├── routes/        # Route definitions
└── tests/         # Test files
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
