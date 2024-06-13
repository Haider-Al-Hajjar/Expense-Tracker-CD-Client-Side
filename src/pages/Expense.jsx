import { ExpenseTable } from "../components/ExpenseTable";
import Button from '@mui/material/Button';
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
export const Expense = () => {
    const params = useParams()
    const navigate = useNavigate();

    function addUser() {
        navigate("/add")
    }

    function login() {
        navigate("/login")
    }
    return (
        <div className="add-user">
        <>
            <Button variant="outlined" onClick={e => addUser()} style={{ color: "white" }}>Add Expense</Button>
            <Button variant="outlined" onClick={e => login()} style={{ color: "white" }}>Login</Button>
            <ExpenseTable />
        </>

            </div>
    )
}
