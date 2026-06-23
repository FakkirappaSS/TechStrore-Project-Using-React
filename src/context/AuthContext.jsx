import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("techstore-user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("techstore-user", JSON.stringify(user));
    } else {
      localStorage.removeItem("techstore-user");
    }
  }, [user]);

  // Simulate OAuth Login
  const login = async (provider) => {
    // Simulating network delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    // Mock user profile
    const mockUser = {
      uid: Math.random().toString(36).substr(2, 9),
      displayName: "ALEX JOHNSON", // Uppercase as requested
      email: "alex.johnson@example.com",
      provider: provider,
      photoURL: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    };
    
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
