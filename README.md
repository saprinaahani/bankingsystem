*Banking System - Test Project*

This repository contains a test project for a backend development role. The project consists of two services: account-manager and payment-manager, designed to manage user accounts and process transactions, respectively. This README provides an overview of the project, setup instructions, and details on how to run and test the services.


*Project Overview*
Services
1. Account Manager Service (account-manager):
   Purpose: Manages user accounts including registration and login.
   Technologies Used: Fastify, Prisma, PostgreSQL, Supertokens (for authentication).
2. Payment Manager Service (payment-manager):
   Purpose: Handles transaction processing such as sending and withdrawing funds.
   Technologies Used: Fastify, Prisma, PostgreSQL, Supertokens (for authentication).


*Tech Stack*
Backend Framework: Fastify
Database: PostgreSQL
ORM: Prisma
Authentication: Supertokens
Containerization: Docker


*Getting Started*
1. Prerequisites
- Docker: Ensure Docker and Docker Compose are installed on your machine.
- Node.js and npm: Required for local development and testing.

2. Project Setup
- Clone the Repository:
          git clone <repository-url>
          cd banking-system
- Build and Start Services with Docker Compose:
          docker-compose up --build

3. Access the Services:
- Account Manager: http://localhost:3000
- Payment Manager: http://localhost:3002


*Local Development*
1. Install Dependencies:
Navigate to each service directory and install dependencies:
- cd account-manager
  npm install
- cd payment-manager
  npm install
2. Start Services Locally:
- cd account-manager
  npm start
- cd payment-manager
  npm start


*API Endpoints*
1. Account Manager API
- POST /users/signup
  Description: Register a new user.
  Request Body: { "username": "string", "password": "string" }
  Response: { "message": "User registered successfully" }
- POST /users/login
  Description: Log in a user and receive a JWT token.
  Request Body: { "username": "string", "password": "string" }
  Response: { "token": "string" }
2. Payment Manager API
- POST /transactions/send
  Description: Process a payment transaction.
  Request Body: { "amount": "number", "toAddress": "string", "status": "string" }
  Response: { "message": "Transaction processed successfully" }
- POST /transactions/withdraw
  Description: Withdraw funds from an account.
  Request Body: { "amount": "number", "fromAddress": "string", "status": "string" }
  Response: { "message": "Transaction processed successfully" }


Configuration
Environment Variables: Ensure the .env files in both services are correctly configured. Sample .env files:

1. account-manager/.env:
DATABASE_URL="postgresql://account_user:manager@localhost:5432/account_database"
SUPERTOKENS_CONNECTION_URI="https://try.supertokens.io"
SUPERTOKENS_API_DOMAIN="http://localhost:3000"
SUPERTOKENS_WEBSITE_DOMAIN="http://localhost:3001"

2. payment-manager/.env:
DATABASE_URL="postgresql://payment_user:manager@localhost:5432/payment_database"
SUPERTOKENS_CONNECTION_URI="https://try.supertokens.io"
SUPERTOKENS_API_DOMAIN="http://localhost:3002"
SUPERTOKENS_WEBSITE_DOMAIN="http://localhost:3001"


Testing
Unit and Integration Tests: Tests are included to verify functionality. Run tests using:
npm test
