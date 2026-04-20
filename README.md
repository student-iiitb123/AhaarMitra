# AhaarMitra

AhaarMitra is a full-stack tiffin and meal delivery platform designed to connect users with local food providers and home kitchens.  
The platform focuses on subscription-based meal plans, vendor management, order handling, and scalable backend architecture.


---

## Problem Statement

Many students, working professionals, and daily commuters struggle to find affordable, healthy, and consistent homemade food.  
AhaarMitra solves this by creating a platform where users can discover and subscribe to meal providers based on their location, food preferences, and schedule.

---

---

## Core Features

 For Users (Tiffin Seekers)
 Explore top-rated kitchens
 Browse meal plans (Lunch / Dinner / Combo)
 Customize subscription (Daily / Weekly / Monthly)
 Manage multiple delivery addresses
 Secure checkout & payments
 Ratings & feedback system
 Subscription dashboard

### vendor Feature
 For Vendors (Tiffin Providers)
 Kitchen onboarding system
 Upload kitchen & food images
 Configure delivery timings
 Manage meal plans & pricing
 Set delivery zones
 View customer insights

---

## Tech Stack

### Frontend
- React.js
- CSS
- Axios
- Zustand

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

### Services / Tools
- Cloudinary
- Razorpay
- Redis
- Nodemon
- ESLint
- Prettier

---



## Project Structure

```bash

AhaarMitra/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   └── ...
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── modules/
│   │   ├── middlewares/
│   │   ├── utils/
│   │   ├── routes/
│   │   └── server.js
│
└── README.md


### System Design

Modular backend architecture
Role-based authentication (User / Vendor / Admin) 
Scalable subscription model
Secure payment integration
Real-time data flow between frontend & backend
Production-level API design

### Authentication Flow

User/Vendor registers
Password hashed using bcrypt
JWT access token generated
Protected routes secured via middleware
Role-based access control implemented