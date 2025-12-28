import { createContext, useContext, useState } from "react";

interface User {
  name?: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  signIn: (user: User) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem("authUser");
    return stored ? JSON.parse(stored) : null;
  });

  function signIn(userData: User) {
    setUser(userData);
    localStorage.setItem("authUser", JSON.stringify(userData));
  }

  function signOut() {
    setUser(null);
    localStorage.removeItem("authUser");
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
