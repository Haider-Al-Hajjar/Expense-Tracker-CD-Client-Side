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
                            Price TBD
                        </TableCell>
                        <TableCell>
                            Program
                        </TableCell>
                        <TableCell>
                            Description TBD
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
                        <TableRow>
                            <TableCell>
                                Numba One
                            </TableCell>
                            <TableCell>
                                304$
                            </TableCell>
                            <TableCell>
                                Porcupine Program
                            </TableCell>
                            <TableCell>
                                <i>the summoning is upon us</i>
                            </TableCell>
                            <TableCell>
                                2024-5-22
                            </TableCell>
                            <TableCell>
                                2024-5-today
                            </TableCell>
                            <TableCell>
                                Delete / Edit
                            </TableCell>
                        </TableRow>

                        // expense.map((expense) => {
                        //     return (
                        //         <TableRow
                        //             hover
                        //             key={expense.id}
                        //         >
                        //             <TableCell>
                        //                 {expense.id}
                        //             </TableCell>
                        //             <TableCell>
                        //                 {expense.firstName}
                        //             </TableCell>
                        //             <TableCell>
                        //                 {expense.lastName}
                        //             </TableCell>
                        //             <TableCell>
                        //                 {expense.items}
                        //             </TableCell>
                        //             <TableCell>
                        //                 {expense.purpose}
                        //             </TableCell>
                        //             <TableCell>
                        //                 {expense.dateOfExpense}
                        //             </TableCell>
                        //             <TableCell>
                        //                 {expense.lastUpdatedDateOfExpense}
                        //             </TableCell>
                        //             <TableCell align="right">
                        //                 <IconButton component="a" onClick={() => goToUpdate("update/" + expense.id)}>
                        //                     <EditIcon />
                        //                 </IconButton>
                        //                 <IconButton component="a" onClick={() => deleteExpense(expense.id)}>
                        //                     <DeleteIcon />
                        //                 </IconButton>
                        //             </TableCell>

                        //         </TableRow>
                        //     )
                        // })
                    }
                </TableBody>
            </Table>
        </div>
    )
}