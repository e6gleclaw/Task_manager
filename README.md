# Task Manager Application

A full-stack task management application built with React, Node.js, Express, and MySQL. This application allows users to create, manage, and track their tasks efficiently.

## Features

- Create new tasks with title and description
- Mark tasks as complete/incomplete
- Delete tasks
- Responsive design with modern UI
- Real-time task updates

## Tech Stack

- **Frontend**: React.js, Material-UI
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **API**: RESTful API

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js (v14 or higher)
- MySQL Server
- npm (Node Package Manager)

## Setup Instructions

### Database Setup

1. Open MySQL command line or MySQL Workbench
2. Create a new database:
   ```sql
   CREATE DATABASE task_manager;
   ```
3. Use the database:
   ```sql
   USE task_manager;
   ```
4. Create the tasks table:
   ```sql
   CREATE TABLE tasks (
     id INT AUTO_INCREMENT PRIMARY KEY,
     title VARCHAR(255) NOT NULL,
     description TEXT,
     is_completed BOOLEAN DEFAULT FALSE,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd Task_manager/backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following content:

   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=allthebest
   DB_NAME=task_manager
   PORT=5000
   ```

4. Start the backend server:
   ```bash
   npm start
   ```
   The server will start running on http://localhost:5000

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd Task_manager/frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```
   The application will open in your default browser at http://localhost:3000

## Running the Application

1. Make sure MySQL server is running
2. Start the backend server (from the backend directory):
   ```bash
   npm start
   ```
3. Start the frontend development server (from the frontend directory):
   ```bash
   npm start
   ```
4. Open your browser and navigate to http://localhost:3000

## API Endpoints

- `GET /tasks` - Get all tasks
- `POST /tasks` - Create a new task
- `PUT /tasks/:id/complete` - Mark a task as complete/incomplete
- `DELETE /tasks/:id` - Delete a task

## Project Structure

```
Task_manager/
├── backend/
│   ├── config/
│   │   └── database.js
│   ├── routes/
│   │   └── tasks.js
│   ├── models/
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.js
│   │   │   └── TaskList.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── README.md
```
![image](https://github.com/user-attachments/assets/acd80369-177e-4017-a0c0-fee5ca3b69d8)


