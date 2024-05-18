import { createContext, useEffect, useState } from 'react';

type AuthContextProviderProps = {
    children: React.ReactNode;
}

type AuthContextType = {
    user: any;
    setUser: React.Dispatch<React.SetStateAction<any | null>>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {

    const [user, setUser] = useState<any>(null);

    // USER STORAGE
    useEffect(() => {
        // GET USER STORAGE
        if (typeof window !== 'undefined') {
            let session: any = localStorage.getItem('user');

            let userData = session !== 'null' ? JSON.parse(session) : null;
            if (userData) {
                setUser(userData);
            }
        }
    }, []);

    // USER STORAGE
    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        }
    }, [user]);

    // useEffect(() => {
    //     console.log(user);
    // }, [user])

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}
