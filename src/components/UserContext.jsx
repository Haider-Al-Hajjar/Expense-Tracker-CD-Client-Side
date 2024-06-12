import { createContext, useState } from "react";

const UserContext = createContext()


export function UserProvider({ children }) {
    const [items, setItems] = useState()
    return (
        <UserContext.Provider value={{ userID: 1 }}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContext