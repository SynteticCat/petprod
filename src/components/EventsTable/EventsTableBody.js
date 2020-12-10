import React from 'react'
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import EventsTableRow from './EventsTableRow'
import TableCell from '@material-ui/core/TableCell';

export default function EventsTableRows (props) {
    const rowsPerPage = props.rowsPerPage;
    const rows = props.rows;
    const page = props.page;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <TableBody>
            {(rowsPerPage > 0
                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : rows
            ).map((row) => {
                return <EventsTableRow key={row.eventId} row={row} />
            })}

            {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                </TableRow>
            )}
        </TableBody>
    )
}
