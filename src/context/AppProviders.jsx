import { ThemeProvider } from "./ThemeContext";
import { CartProvider } from "./CartContext";
import { WishlistProvider } from "./WishlistContext";
import { AuthProvider } from "./AuthContext";

export function AppProviders({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            {children}
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
