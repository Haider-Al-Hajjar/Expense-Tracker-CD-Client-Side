import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as expenseService from '../../services/ExpenseService';
import { UserContext } from "../../components/UserContext";


function Login() {
    const { userId, setUserId } = useContext(UserContext)
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [firebaseUser, setFirebaseUser] = useState({});
    // const [expenseServiceUser, setExpenseServiceUser] = useState();
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
                }).then(response => {
                    console.log("SHOULD NAV TO HOMEPAGE/USERID")
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
                .then(response => {
                    console.log(response)
                    setContext(expenseService.getUserByUid(response.user.uid))
                }).then(response => {
                    console.log("SHOULD NAVIGATE TO HOMEPAGE WITH /USERID")
                })
        }
        catch (error) {
            console.log(error.message)
        }
    }

    const logout = async () => {
        await signOut(auth)
            .then(response => {
                setExpenseServiceUser({})
                setContext()
            })
    }


    return (
        <div className="login-add">
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
            </div>
    )
}

export default Login
