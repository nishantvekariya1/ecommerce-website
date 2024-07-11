# MetroCart - Ecommerce Shopping Website

MetroCart is an ecommerce shopping website built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with TypeScript. It includes user and admin pages, with functionalities like cart, payment, product management, and various analytical charts.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)

## Demo

![Demo Screenshot](https://github.com/nishantvekariya1/ecommerce-website/blob/master/Screenshots/1.png)
![Demo Screenshot](https://github.com/nishantvekariya1/ecommerce-website/blob/master/Screenshots/2.png)
![Demo Screenshot](https://github.com/nishantvekariya1/ecommerce-website/blob/master/Screenshots/3.png)
![Demo Screenshot](https://github.com/nishantvekariya1/ecommerce-website/blob/master/Screenshots/4.png)
![Demo Screenshot](https://github.com/nishantvekariya1/ecommerce-website/blob/master/Screenshots/5.png)
![Demo Screenshot](https://github.com/nishantvekariya1/ecommerce-website/blob/master/Screenshots/6.png)
![Demo Screenshot](https://github.com/nishantvekariya1/ecommerce-website/blob/master/Screenshots/7.png)
![Demo Screenshot](https://github.com/nishantvekariya1/ecommerce-website/blob/master/Screenshots/8.png)
![Demo Screenshot](https://github.com/nishantvekariya1/ecommerce-website/blob/master/Screenshots/9.png)

## Features

- **User Side**:
  - Cart: Add to cart, view cart, and manage cart items
  - Payment: Secure payment processing

- **Admin Side**:
  - Product Management: Add, update, and delete products
  - User List: View all registered users
  - Analytics: Various charts for better understanding of growth
    - Total user count
    - Male-female ratio graph
    - Revenue graph of the last 6 or 12 months

## Technologies Used

- **MongoDB**: NoSQL database for storing product and user data
- **Express.js**: Web application framework for Node.js
- **React.js**: Frontend library for building user interfaces
- **Node.js**: JavaScript runtime for server-side development
- **TypeScript**: Typed superset of JavaScript
- **Mongoose**: ODM for MongoDB
- **JWT**: JSON Web Tokens for authentication
- **Chart.js**: JavaScript library for creating charts

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/nishantvekariya1/ecommerce-website
    ```

2. Install the dependencies for both the client and server:
    ```bash
    # In the server directory
    cd server
    npm install

    # In the client directory
    cd client
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    # In the server directory
    PORT=write_your_port_here
    MONGO_URI=your_mongodb_url
    STRIPE_KEY=your_stripe_private_key
    
    # In the client directory
    VITE_FIREBASE_KEY=your_firebase_key
    VITE_AUTH_DOMAIN=your_firebase_auth_domain
    VITE_PROJECT_ID=your_firebase_project_id
    VITE_STORAGE_BUCKET=your_firebase_storage_bucket
    VITE_MESSAGING_SENDER_ID=your_firebase_messaging_sender
    VITE_APP_ID=your_firebase_app_id
    VITE_SERVER=your_server_link
    VITE_STRIPE_KEY=your_stripe_public_key
    ```

4. Start the development servers:
    ```bash
    # In the server directory
    cd server
    npm run dev

    cd server
    npm run watch

    # In the client directory
    cd client
    npm run dev
    ```

5. Open your browser and navigate to `http://localhost:5173` to view the MetroCart application.
