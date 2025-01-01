# Project Setup and Start Guide

## Prerequisites

Before you begin, ensure you have met the following requirements:
- You have installed [Node.js](https://nodejs.org/) (lts version).
- You have a package manager like [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/).

## Setup

1. **Clone the repository:**
    ```sh
    git clone https://github.com/dsah567/todo
2. **Navigate to the project directory:**
    ```sh
    cd todo/backend
    ```
3. **Install dependencies:**
    ```sh
    npm install
    ```
    or
    ```sh
    yarn install
    ```

## Configuration

1. **Create a `.env` file in the backend directory and add the necessary environment variables:**
    ```env
    PORT= 8000
    MONGODB_URI=
    DB_NAME=
    JWT_SECRET=
    ACCESS_TOKEN_EXPIRY=1d
    ```

## Running the Project

1. **Start the development server:**
    ```sh
    npm run dev
    ```
    or
    ```sh
    yarn dev
    ```

2. **Open your browser and visit:**
    ```
    http://localhost:8000
    ```
## Contact

If you have any questions or feedback, please contact [sahd7929@gmail.com](mailto:sahd7929@gmail.com).
