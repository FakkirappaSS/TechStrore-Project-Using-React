# TechStore - Premium React E-Commerce Project 🚀

TechStore is a modern, fully functional frontend E-Commerce web application built using **React** and **Vite**. It features a premium, sleek UI with a dark/light mode toggle, dynamic product filtering, a shopping cart, a wishlist system, and a comprehensive checkout flow.

![TechStore Banner](public/favicon.png)

## ✨ Features

- **🛣️ Dynamic Routing**: Multi-page architecture powered by `react-router-dom` with distinct deep-linkable URLs for Products, Wishlist, Checkout, Deals, and Settings.
- **🧠 Scalable Context API**: Global state management decoupled into specific contexts (`AuthContext`, `ThemeContext`, `CartContext`, `WishlistContext`), completely removing prop-drilling and redundant re-renders.
- **🔐 User Profiles & Mock Auth**: Simulated OAuth login flow with dynamic UI updates. Authenticated users gain access to a dedicated User Profile dropdown with personalized settings.
- **⚡ Flash Deals Interface**: A dynamic Deals page (`/deals`) with countdown timers, low stock progress bars, and CSS gradient animations for limited-time offers.
- **🌗 Dark / Light Mode**: Seamless theme switching with persistent state using `localStorage`. Smooth CSS transitions applied across all components.
- **🛒 Shopping Cart & Orders**: Add products, adjust quantities, view total price, and manage your recent purchases in the "My Orders" interface.
- **❤️ Wishlist**: Save favorite products in a dedicated full-page view. Move items directly from the wishlist to the cart.
- **🔍 Search & Filter**: Real-time search by product name or brand. Filter by categories and sort by Price, Rating, or Name.
- **💳 Checkout Flow**: A beautifully designed checkout page featuring an order summary and 5 selectable payment methods (Cash on Delivery, UPI, Credit/Debit Card, Net Banking, EMI). Includes an animated order success confirmation.
- **🎨 Premium UI/UX**: Built with custom Vanilla CSS utilizing 60+ CSS variables for the theme. Includes hover effects, glassmorphism elements, SVG icons, and responsive design for mobile, tablet, and desktop.

## 🛠️ Tech Stack

- **Framework**: React (Functional Components & Hooks)
- **Routing**: React Router v6
- **State Management**: React Context API
- **Build Tool**: Vite
- **Styling**: Pure CSS3 (CSS Variables, Flexbox, CSS Grid)
- **Icons**: Inline SVGs (No external font libraries)

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/FakkirappaSS/TechStrore-Project-Using-React.git
   cd TechStrore-Project-Using-React
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Open [http://localhost:5173/](http://localhost:5173/) to view it in the browser.

## 📂 Project Structure

- `src/App.jsx`: Main router configuration mapping URLs to components.
- `src/layouts/`: Contains `RootLayout.jsx` for persistent global components like the Header, Navigation, and Footer.
- `src/pages/`: Dedicated page components (`Home`, `Products`, `ProductDetails`, `Checkout`, `Wishlist`, `Deals`, `Settings`, etc.).
- `src/context/`: Contains modular Context API providers (`ThemeContext`, `CartContext`, `AuthContext`, etc.) bundled together in `AppProviders.jsx`.
- `src/components/`: Reusable UI components like `ProductCard` and `UserProfile`.
- `src/App.css` & `index.css`: Core layout styles and dynamic CSS variables.
- `src/data.js`: Mock database containing product information and image URLs.
- `index.html`: Entry point of the application.

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/FakkirappaSS/TechStrore-Project-Using-React/issues).

## 📝 License
This project is open-source and available under the [MIT License](LICENSE).
