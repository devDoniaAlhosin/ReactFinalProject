import { createContext, useState } from "react";

export const UserAuth = createContext();

export function UserAuthProvider({ children }) {
  const [token, setToken] = useState(null);
  return (
    <UserAuth.Provider value={{ token, setToken }}>
      {children}
    </UserAuth.Provider>
  );
}
