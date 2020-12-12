import React from 'react';
import { TableHead, TableRow, TableCell } from '@material-ui/core';

function EventsTableHead() {
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

export default EventsTableHead;