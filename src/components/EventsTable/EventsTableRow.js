import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

export default function EventsTableRow(props) {
    const row = props.row;

    return (
        <TableRow>
            <TableCell align="right">{row.id}</TableCell>
            <TableCell align="right">{row.eventTime}</TableCell>
            <TableCell align="right">{row.isViolation ? 'true' : 'false'}</TableCell>
            <TableCell align="right">{row.userId}</TableCell>
            <TableCell align="right">{row.ownerId}</TableCell>
        </TableRow>
    );
}