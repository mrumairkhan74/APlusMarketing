<p align="center">
  <img src="https://res.cloudinary.com/mrumairkhan74/image/upload/v1750769146/A_Plus_Logo_wnc4rr.png" alt="A+ Marketing Logo" width="200"/>
</p>

# 🏠 A+ Real Estate Property Listing App

A full-featured **MERN stack** real estate platform for listing, buying, and managing properties. Built with modern tools like **Cloudinary**, **JWT Auth**, and **Redux Toolkit**. Includes a secure **admin dashboard** for property management.

---

## ⚙️ Tech Stack

| Frontend | Backend | Database | Cloud & Auth |
|----------|---------|----------|---------------|
| ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Redux](https://img.shields.io/badge/Redux-593d88?style=for-the-badge&logo=redux&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-0ea5e9?style=for-the-badge&logo=tailwindcss&logoColor=white) | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Express](https://img.shields.io/badge/Express.js-404d59?style=for-the-badge) | ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) | ![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) |

---

## ✨ Features

### 👥 Users
- Browse all properties with images and status badges
- View individual property details
- Wishlist properties (requires login)
- Filter by status (Available / Sold)

### 🔐 Authentication
- JWT-based login and registration
- Role-based access: `admin` vs `user`

### 🛠 Admin Dashboard
- Add new properties with image (Cloudinary upload)
- Set price and unit (Lac/Crore)
- Mark property as Sold or Available
- Edit/Delete property

---

## 📸 Screenshots

| Home Page | Admin Dashboard |
|-----------|-----------------|
| ![Home](https://res.cloudinary.com/mrumairkhan74/image/upload/v1750672236/A_1_bcd0x2.png) | ![Dashboard](https://res.cloudinary.com/mrumairkhan74/image/upload/v1750672235/A_6_qm4u7i.png) 
| ![Login](https://res.cloudinary.com/mrumairkhan74/image/upload/v1750672235/A_2_pwuikf.png) | ![Register](https://res.cloudinary.com/mrumairkhan74/image/upload/v1750672235/A_3_m8yje6.png) 
| ![CreateProperty](https://res.cloudinary.com/mrumairkhan74/image/upload/v1750672235/A_7_na1wva.png) | ![Wishlist](https://res.cloudinary.com/mrumairkhan74/image/upload/v1750672235/A_8_spba9y.png)
---


## 🏗️ Project Structure
```pgsql
client/       → React/Vite frontend
server/       → Node/Express backend
models/       → Mongoose schemas
routes/       → Express routes
controllers/  → Route handlers
middleware/   → Auth, file upload, etc.
---
```
##---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/mrumairkhan74/AplusMarketing.git
cd AplusMarketing
```
### 2. Backend Setup
```bash
cd server
npm install
```
#### Create a .env file in the server directory:
```env
MONGO_URL=your_mongodb_url
JWT_SECRET_KEY=your_jwt_secret
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_key
CLOUD_API_SECRET=your_cloudinary_secret
```
#### Run the backend server:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd ../client
npm install
npm run dev
```

## 📫 Contact
| Developed with ❤️ by  Umair Khan

