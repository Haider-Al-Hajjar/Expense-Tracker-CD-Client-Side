import { createContext, useState } from "react";

export const UserContext = createContext()


export function UserProvider({ children }) {
    const [userId, setUserId] = useState("test")
    return (
        <UserContext.Provider value={{ userId, setUserId }}>
            {children}
        </UserContext.Provider>
    )
}
