import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as expenseService from '../../services/ExpenseService';


function Login() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [firebaseUser, setFirebaseUser] = useState({});
    const [expenseServiceUser, setExpenseServiceUser] = useState();
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setFirebaseUser(currentUser);
            console.log("user Changed");
        })
    }, [])
    const navigate = useNavigate();

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)

            const userToBeCreated = {
                uid: user.user.uid,
                name: user.user.email
            }
            console.log(userToBeCreated)
            expenseService.createUser(userToBeCreated)
                .then(response => {
                    console.log(response.data)
                    setExpenseServiceUser(response.data)
                }).then(response => {
                    navigate(`/${expenseServiceUser.id}`)
                })

            // save response to a use state with a new user variable & link back to the app page with the id of that user.
        }
        catch (error) {
            console.log(error.message)
        }
    }

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            console.log(user.user)
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
            {firebaseUser?.email}
            <button onClick={logout}>Sign Out </button>
        </div>
    )
}

export default Login