# Friends Management API Documentation

## Overview

This API allows for managing a list of friends, including adding, retrieving, updating, and deleting friend information. It also supports user registration, login, and session management.

## API Endpoints

### Friends Endpoints

#### Retrieve All Friends

- **Method:** GET
- **Path:** `/friends`
- **Description:** Retrieves a list of all friends.
- **Response:** JSON object containing all friends.

#### Retrieve a Single Friend

- **Method:** GET
- **Path:** `/friends/:email`
- **Description:** Retrieves details of a single friend by their email address.
- **Parameters:** `email` - The email address of the friend.
- **Response:** JSON object containing the friend's details.

#### Add a New Friend

- **Method:** POST
- **Path:** `/friends`
- **Description:** Adds a new friend to the list.
- **Request Body:** JSON object containing the new friend's email, firstName, lastName, and DOB.
- **Response:** Success message indicating the friend has been added.

#### Update Friend Details

- **Method:** PUT
- **Path:** `/friends/:email`
- **Description:** Updates details of an existing friend.
- **Parameters:** `email` - The email address of the friend to update.
- **Request Body:** JSON object containing the fields to update (firstName, lastName, DOB).
- **Response:** Success message and the updated friend's details.

#### Delete a Friend

- **Method:** DELETE
- **Path:** `/friends/:email`
- **Description:** Deletes a friend from the list.
- **Parameters:** `email` - The email address of the friend to delete.
- **Response:** Success message indicating the friend has been deleted.

### User Authentication Endpoints

#### User Registration

- **Method:** POST
- **Path:** `/register`
- **Description:** Registers a new user.
- **Request Body:** JSON object containing the new user's username and password.
- **Response:** Success message indicating the user has been registered.

#### User Login

- **Method:** POST
- **Path:** `/login`
- **Description:** Authenticates a user and initiates a session.
- **Request Body:** JSON object containing the user's username and password.
- **Response:** Success message indicating the user has successfully logged in.

## Middleware

- **Session Middleware:** Ensures that a valid session exists for authenticated requests.
- **Authentication Middleware:** Verifies the user's authentication status before allowing access to the friends endpoints.

## Notes

- The API uses JWT for authentication and express-session for session management.
- It is important to ensure that the secret keys used for JWT and session management are securely stored and not hardcoded in production environments.
