import { createContext, useContext , useState ,ReactNode } from "react";
import User from "../intefaces/User";

interface AuthContextData {
    dni : User["dni"] | null;
    name: User["name"] | null;
    lastname: User["lastname"] | null;
    email : User["email"] | null;
    token : User["token"] | null;
    login : (user : User) => void;
    logout : () => void;
    isAuth : boolean;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

interface AuthProviderProps {
    children : ReactNode;
}

export const AuthProvider = ({children} : AuthProviderProps) => {
    const [dni, setDni] = useState<User["dni"] | null>(null);
    const [name, setName] = useState<User["name"] | null>(null);
    const [lastname, setLastname] = useState<User["lastname"] | null>(null);
    const [email, setEmail] = useState<User["email"] | null>(null);
    const [token, setToken] = useState<User["token"] | null>(null);
    const [isAuth, setIsAuth] = useState<boolean>(false);

    const login = (user : User) => {
        setDni(user.dni);
        setName(user.name);
        setLastname(user.lastname);
        setEmail(user.email);
        setToken(user.token);
        setIsAuth(true);
    }

    const logout = () => {
        setDni(null);
        setName(null);
        setLastname(null);
        setEmail(null);
        setToken(null);
        setIsAuth(false);
    }

    return (
        <AuthContext.Provider value={{dni,name,lastname,email,token,login,logout,isAuth}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};