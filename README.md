# Speer-Backend

Speer-Backend is a secure and scalable RESTful API that allows users to manage notes. It includes user authentication, note creation, updating, deletion, sharing, and searching functionality.

## Table of Contents

- [Overview](#overview)
- [Technical Stack](#technical-stack)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Run the Application](#run-the-application)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Overview

Speer-Backend provides a RESTful API for managing notes with features such as user authentication, note CRUD operations, sharing notes, and searching based on keywords.

## Technical Stack

The project is built using the following technologies:

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication
- Express Rate Limit for rate limiting
- ...

## Setup

### Prerequisites

List the prerequisites required to run your application, such as Node.js and MongoDB.

- Node.js 
- MongoDB Cloud account

### Installation

Describe the installation steps. For example:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-project.git
   ```

2. Install the dependencies:

   ```
   cd speer```

   ```bash
    npm install
    ```

3. Set up the config file in terms of ".env" in the root folder:

    ```bash
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/speer
    JWT_SECRET=your-secret
    ```
4. Run the application:

    ```bash
    npm start
    ```

### API ENDPOINTS

List and briefly explain your API endpoints, including authentication requirements.

POST /api/auth/signup: Create a new user account.
POST /api/auth/login: Log in to an existing user account and receive an access token.
GET /api/notes: Get a list of all notes for the authenticated user.




