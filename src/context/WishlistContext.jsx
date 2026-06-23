import { createContext, useContext, useState, useEffect } from "react";
import products from "../data.js";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("techstore-wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("techstore-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (productID) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.includes(productID)) {
        return prevWishlist.filter((id) => id !== productID);
      } else {
        return [...prevWishlist, productID];
      }
    });
  };

  // Get wishlist product objects based on IDs
  const wishlistProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <WishlistContext.Provider value={{ wishlist, wishlistProducts, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}
