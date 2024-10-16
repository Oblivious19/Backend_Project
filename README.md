# Backend_Project
Performing CRUD operations on a MongoDB Database using Postman 

# Service API

A simple REST API to manage services, built with Express and MongoDB. This API allows you to perform CRUD operations (Create, Read, Update, Delete) on services, with fields including service name, description, and price.
Features

    Create a new service (POST)
    Retrieve all services (GET)
    Update an existing service (PUT)
    Delete a service (DELETE)

Prerequisites

    Node.js
    MongoDB (running locally)

Setup Instructions
1. Clone the repository

bash

git clone https://github.com/Oblivious19/Backend_Project.git

cd Backend_Project

2. Install dependencies

npm install

3. Set up MongoDB

Make sure MongoDB is installed and running locally on your machine. By default, the API connects to a local MongoDB instance at mongodb://localhost:27017/servicesDB.

To start MongoDB:

mongod

4. Running the Server

Start the server using nodemon (which automatically restarts the server on file changes):

npm start

The server will start on http://localhost:3000.
## API Endpoints
### Testing the API Using Postman

### You can test the API endpoints using Postman:

    POST request to create a service:
        Method: POST
        URL: http://localhost:3000/api/services
        Body: raw JSON (as shown in the "Add a New Service" section).

    GET request to retrieve all services:
        Method: GET
        URL: http://localhost:3000/api/services

    PUT request to update a service:
        Method: PUT
        URL: http://localhost:3000/api/services/{serviceId}
        Body: raw JSON (as shown in the "Update a Service" section).

    DELETE request to delete a service:
        Method: DELETE
        URL: http://localhost:3000/api/services/{serviceId}
