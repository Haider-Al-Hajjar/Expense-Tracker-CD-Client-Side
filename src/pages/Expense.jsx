import { ExpenseTable } from "../components/ExpenseTable";
import Button from '@mui/material/Button';
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
        <>
            <Button variant="outlined" onClick={e => addUser()} style={{ color: "white" }}>Add User</Button>
            <Button variant="outlined" onClick={e => login()} style={{ color: "white" }}>Login</Button>
            <ExpenseTable />
        </>
    )
}
