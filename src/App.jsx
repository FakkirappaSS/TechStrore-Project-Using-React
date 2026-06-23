import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import MyOrders from "./pages/MyOrders";
import Settings from "./pages/Settings";
import Deals from "./pages/Deals";
import Support from "./pages/Support";
import About from "./pages/About";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "orders",
        element: <MyOrders />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "deals",
        element: <Deals />,
      },
      {
        path: "support",
        element: <Support />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
