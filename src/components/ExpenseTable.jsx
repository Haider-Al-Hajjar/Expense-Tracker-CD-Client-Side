import { useEffect, useState } from 'react';
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

export const ExpenseTable = () => {
    const [expense, setExpense] = useState([]); // at the bottom, change aptNumber, desc, email, etc to correct data for expenseTracker.
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
        expenseService.getAllExpense()
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
        <div >
            <Table sx={{ minWidth: 1000 }} style={{ maxWidth: 1200 + "px", backgroundcolor: "gray", fontSize: 2000 + "px", color: "white" }}>
                <TableHead sx={{}}>
                    <TableRow>
                        <TableCell>
                            Expense Id
                        </TableCell>
                        <TableCell>
                            Price
                        </TableCell>
                        <TableCell>
                            Program
                        </TableCell>
                        <TableCell>
                            Description
                        </TableCell>
                        <TableCell>
                            Date Added
                        </TableCell>
                        <TableCell>
                            Date Edited
                        </TableCell>
                        <TableCell align="right">
                            Actions
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody style={{ backgroundcolor: "white" }}>
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
                                        {expense.email}
                                    </TableCell>
                                    <TableCell>
                                        {expense.aptNumber}
                                    </TableCell>
                                    <TableCell>
                                        {expense.description}
                                    </TableCell>
                                    <TableCell>
                                        {expense.date}
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