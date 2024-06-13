import { useContext, useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import * as expenseService from '../services/ExpenseService';
import {
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material';
import UserContext from './UserContext';
import { setUserId } from 'firebase/analytics';

export const ExpenseTable = () => {
    const { userID } = useContext(UserContext)
    const [expense, setExpense] = useState([]); // at the bottom, get Price & description working after Jose fixes up the back end.
    const navigate = useNavigate();
    useEffect(() => {
        expenseService.getAllExpense()
            .then(res => {
                setExpense(res.data);
            })
    }, [])
    const goToUpdate = (id) => {
        navigate(`/${id}`);
    }
    function requestFromAPI() {
        expenseService.getAllExpense()// get user by id, and then use response.data.expenses to populate the table.
            .then(res => {
                setExpense(res.data);
            })
    }
    function deleteExpense(id) {
        expenseService.deleteExpense(id)
            .then(() => {
                requestFromAPI();
            })
    }
    return (
        <div className='table-container'>
            <p> Current email = {userID}</p>
            <button onClick={() => setUserId(1)}> increment ID</button>
            <Table sx={{ minWidth: 1000 }} style={{ maxWidth: 1200 + "px", backgroundcolor: "gray", fontSize: 2000 + "px", color: "white" }}>
                <TableHead sx={{}}>
                    <TableRow>
                        <TableCell>
                            🪪 Expense Id
                        </TableCell>
                        <TableCell>
                            💲Price TBD
                        </TableCell>
                        <TableCell>
                            📠 Program
                        </TableCell>
                        <TableCell>
                            📦 Items
                        </TableCell>
                        <TableCell>
                            📜 Description TBD
                        </TableCell>
                        <TableCell>
                            📅 Date Added
                        </TableCell>
                        <TableCell>
                            📝 Date Edited
                        </TableCell>
                        <TableCell align="right">
                            Actions
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody style={{ backgroundcolor: "white !important" }}>
                    {
                        expense.map((expense) => {
                            return (
                                <TableRow
                                    hover
                                    key={expense.id}
                                >
                                    <TableCell>
                                        {expense.id}
                                    </TableCell>
                                    <TableCell>
                                        {expense.firstName}
                                    </TableCell>
                                    <TableCell>
                                        {expense.lastName}
                                    </TableCell>
                                    <TableCell>
                                        {expense.items}
                                    </TableCell>
                                    <TableCell>
                                        {expense.purpose}
                                    </TableCell>
                                    <TableCell>
                                        {expense.dateOfExpense}
                                    </TableCell>
                                    <TableCell>
                                        {expense.lastUpdatedDateOfExpense}
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton component="a" onClick={() => goToUpdate("update/" + expense.id)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton component="a" onClick={() => deleteExpense(expense.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>

                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}
