import { createContext, useContext, useState } from "react";
import { User } from "../types/User";
import { show } from "../services/users";

type AuthContextProps = {
  currentUser: User | undefined,
  login: () => void,
  logout: () => void,
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

function AuthContextProvider({ children }: { children: React.ReactNode }){
  const [user, setUser] = useState<User>();

  const login = () => {
    show(1).then(res => setUser(res.data));
  }

  const logout = () => {
    setUser(undefined)
  }

  return (
    <AuthContext.Provider value={{ login, logout, currentUser: user }}>
      {children}
    </AuthContext.Provider> 
  )
}

export default AuthContextProvider;

export function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);

  if(!context) throw new Error('Trying to use AuthContext outside of provider')

  return context
}