# 🛒 DailyMart App 

## 📖 Overview

**DailyMart App** is a web-based grocery shopping platform designed to simplify the process of browsing, adding to cart, placing orders, and tracking order status. Built using the **MERN** stack (MongoDB, Express.js, React.js, and Node.js), it provides a fast, responsive, and user-friendly experience.

---

## 🛠️ Tech Stack

### Frontend:
- **HTML5** & **CSS3** (for markup and styling)
- **React.js** (for dynamic UI and state management)

### Backend:
- **Node.js** (JavaScript runtime environment)
- **Express.js** (backend web framework)
- **MongoDB** (NoSQL database)

### Other Tools:
- **JWT** (JSON Web Tokens for secure authentication)
- **Mongoose** (for MongoDB object modeling)
- **Bcrypt.js** (for password hashing)
- **Stripe** (for payment integration)

---

## 🎯 Features

1. **User Authentication**:
   - Secure JWT-based sign up and log in functionality.
   - Password hashing using bcrypt.

2. **Product Management**:
   - Dynamic display of grocery products fetched from MongoDB.
   - Product pages with detailed information.

3. **Cart Management**:
   - Add, remove, and update items in the shopping cart.
   - Real-time cart total update.

4. **Order Processing**:
   - Place orders with delivery or pickup options.
   - MongoDB stores order information.

5. **Order History**:
   - Users can view their past orders with status updates.

6. **Secure Payments**:
   - Payment integration via **Stripe**.

---

## 📂 Project Structure

### Frontend (HTML, CSS, React.js):
- **public/**: Static files (images, main HTML file).
- **src/components/**: React components (e.g., `ProductList`, `Cart`, `Order`).
- **src/pages/**: Main application pages (Home, Login, Cart, Order Summary).
- **src/App.js**: Main React application logic.
- **src/index.js**: Entry point for rendering the React app.
- **src/styles/**: CSS stylesheets for app styling.

### Backend (Node.js, Express.js):
- **server.js**: Entry point for the backend server.
- **routes/**: API endpoints for authentication, products, and orders.
  - `auth.js`: Handles login and registration.
  - `product.js`: Manages product-related routes.
  - `order.js`: Handles order and payment processing.
- **controllers/**: Logic for handling incoming requests.
- **models/**: MongoDB models for Users, Products, Orders.
- **middlewares/**: Custom middleware (e.g., JWT authentication, error handling).

---

## ⚙️ Setup Instructions

### Prerequisites:

- **Node.js** and **npm** (or **yarn**) installed.
- **MongoDB** (locally or on the cloud, e.g., MongoDB Atlas).
- **Stripe** account for payment processing.

---


### Backend Setup

```bash
# 1. Clone the repository
git clone https://github.com/abduillahaljubair/web.git
cd grocery-app/backend

# 2. Install dependencies
npm install

# 3. Configure environment variables
# Create a .env file in the backend/ folder and add the following:
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key

# 4. Start the backend server
npm start

# The backend will run on http://localhost:5000

```
### Backend Setup

```bash

# 1. Navigate to the frontend directory
cd ../frontend

# 2. Install frontend dependencies
npm install

# 3. Start the frontend server
npm start

# The React app will run on http://localhost:3000

```


## API Endpoints

## Authentication:
POST /api/auth/register   # Register a new user.
POST /api/auth/login      # Log in with email and password.

## Products:
GET /api/products         # Fetch a list of all available products.
GET /api/products/:id     # Fetch a specific product by its ID.

## Cart:
POST /api/cart            # Add an item to the user's cart.
GET /api/cart             # Retrieve the user's cart.

## Orders:
POST /api/orders          # Place a new order.
GET /api/orders           # Retrieve the user's order history.

## 📱 Screenshots
### Home Page | Product Page | Cart

## 🔐 Security
JWT is used to handle secure user authentication and session management.
Passwords are hashed using bcrypt.js.
Stripe is used for secure payment processing, ensuring compliance with payment security standards.

## 🧑‍💻 Contributing

## We welcome contributions to the project! Here's how you can contribute:

## 1. Fork the project.
## 2. Create a new branch:
git checkout -b feature/your-feature

## 3. Make your changes and commit them:
git commit -m "Add feature"

## 4. Push to the branch:
git push origin feature/your-feature

## 5. Open a pull request.

## 📝 License
## This project is licensed under the MIT License - see the LICENSE file for details.








