import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import { useState } from "react";

function Login() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })
    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            console.log(user)
        }
        catch (error) {
            console.log(error.message)
        }
    }

    const login = async () => {
        try {
            const user = await signInWithEmailAndPasswordWithEmailAndPassword(auth, loginEmail, loginPassword)
            console.log(user)
        }
        catch (error) {
            console.log(error.message)
        }
    }

    const logout = async () => {
        await signOut(auth)
    }


    return (
        <div>
            <div>
                <h3> Register User</h3>
                <input type="text" placeholder="Email..." onChange={(event) => {
                    setRegisterEmail(event.target.value)
                }} />
                <input type="text" placeholder="Password..." onChange={(event) => {
                    setRegisterPassword(event.target.value)
                }} />
                <button onClick={register}>Create User</button>
            </div>

            <div>
                <h3> Login</h3>
                <input type="text" placeholder="Email..." onChange={(event) => {
                    setLoginEmail(event.target.value)
                }} />
                <input type="text" placeholder="Password..." onChange={(event) => {
                    setLoginPassword(event.target.value)
                }} />
                <button onClick={login}>Login </button>
            </div>
            <h3> User Logged in</h3>
            {user?.email}
            <button onClick={logout}>Sign Out </button>
        </div>
    )
}

export default Login