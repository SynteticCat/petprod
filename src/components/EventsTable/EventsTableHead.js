import React from 'react'
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export default function EventsTableHead() {
    return (
        <TableHead>
            <TableRow>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">Время регистрации</TableCell>
                <TableCell align="right">Нарушение</TableCell>
                <TableCell align="right">ID пользователя</TableCell>
                <TableCell align="right">ID владельца</TableCell>
            </TableRow>
        </TableHead>
    );
}
