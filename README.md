
# Twitter-Like Backend System

## Overview
This is a simplified backend system for a Twitter-like application, built using Node.js, Express, and MongoDB. The system includes user registration, authentication, posting tweets, and fetching user timelines.

## Features
- User Registration
- User Login with JWT Authentication
- Posting Tweets
- Fetching User Timelines with Cursor-Based Pagination

## Folder Structure
twitter-backend/
│
├── src/
│ ├── controllers/
│ │ ├── userController.js
│ │ └── tweetController.js
│ │
│ ├── models/
│ │ ├── User.js
│ │ └── Tweet.js
│ │
│ ├── routes/
│ │ ├── userRoutes.js
│ │ └── tweetRoutes.js
│ │
│ ├── middleware/
│ │ └── auth.js
│ │
│ ├── config/
│ │ └── (placeholder for future configuration files)
│ │
│ ├── app.js
│ └── server.js
│
├── .env
├── package.json
└── README.md


## Getting Started

### Prerequisites
- Node.js and npm installed on your machine
- MongoDB instance (local or cloud-based like MongoDB Atlas)

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/twitter-backend.git
    cd twitter-backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your environment variables:
    ```plaintext
    PORT=3000
    MONGO_URI=your_mongo_connection_string
    JWT_SECRET=your_jwt_secret
    ```

### Running the Application
1. Start the server:
    ```bash
    npm start
    ```

2. The server will start on the port specified in your `.env` file. By default, it will be `http://localhost:3000`.

### API Endpoints

**User Registration:**
- **Endpoint:** `POST /api/users/register`
- **Request Body:**
    ```json
    {
        "username": "exampleUser",
        "password": "examplePassword"
    }
    ```
- **Response:**
    ```json
    {
        "message": "User registered successfully"
    }
    ```

**User Login:**
- **Endpoint:** `POST /api/users/login`
- **Request Body:**
    ```json
    {
        "username": "exampleUser",
        "password": "examplePassword"
    }
    ```
- **Response:**
    ```json
    {
        "token": "your_jwt_token"
    }
    ```

**Post a Tweet:**
- **Endpoint:** `POST /api/tweets`
- **Headers:**
    ```http
    Authorization: Bearer your_jwt_token
    ```
- **Request Body:**
    ```json
    {
        "text": "Hello, world!"
    }
    ```
- **Response:**
    ```json
    {
        "message": "Tweet posted successfully"
    }
    ```

**Fetch User Timeline:**
- **Endpoint:** `GET /api/users/:userId/timeline`
- **Headers:**
    ```http
    Authorization: Bearer your_jwt_token
    ```
- **Response:**
    ```json
    [
        {
            "_id": "tweet_id",
            "userId": "user_id",
            "text": "Hello, world!",
            "createdAt": "2024-01-01T00:00:00.000Z"
        },
        ...
    ]
    ```

## Deploying to Render

### Step-by-Step Guide

1. **Create a Render Account:**
   Sign up for an account on [Render](https://render.com/).

2. **Create a New Web Service:**
   - Log in to your Render account.
   - Click on the "New" button in the dashboard and select "Web Service".
   - Connect your GitHub or GitLab account and select the repository that contains your project.

3. **Configure the Web Service:**
   - **Name:** Give your service a name.
   - **Branch:** Select the branch you want to deploy (e.g., `main` or `master`).
   - **Build Command:** Leave it empty or use:
     ```bash
     npm install
     ```
   - **Start Command:** 
     ```bash
     node src/server.js
     ```
   - **Environment:** Choose `Node` as the environment.

4. **Add Environment Variables:**
   - Click on the "Environment" tab.
   - Add the required environment variables:
     - `PORT` (usually 3000, but Render assigns its own port)
     - `MONGO_URI` (your MongoDB connection string)
     - `JWT_SECRET` (your JWT secret key)

5. **Deploy the Service:**
   - Click "Create Web Service".
   - Render will start building and deploying your service. Follow the logs in the Render dashboard to see the build and deployment process.

### Additional Tips

- **Database Configuration:**
  Ensure your MongoDB instance is accessible from Render. You might need to whitelist Render's IP addresses or configure your MongoDB Atlas settings to allow connections from anywhere.

- **Testing:**
  After deployment, test your API endpoints using tools like Postman to ensure everything is working correctly.

- **Logs and Monitoring:**
  Render provides logs and monitoring features. Use these to debug and monitor your application once it's deployed.

- **Automatic Deployments:**
  Render can automatically deploy your application whenever you push new commits to your repository. This is configurable in the Render dashboard.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
