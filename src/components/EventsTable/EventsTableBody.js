import React from 'react';
import { TableBody, TableRow, TableCell } from '@material-ui/core';
import { Link } from 'react-router-dom';

const RenderRow = ({ row }) => {
    return (
        <TableRow>
            <TableCell align="right"><Link to={"/event/" + row.id}>{row.id}</Link></TableCell>
            <TableCell align="right">{row.eventTime}</TableCell>
            <TableCell align="right">{row.isViolation ? 'true' : 'false'}</TableCell>
            <TableCell align="right">{row.userId}</TableCell>
            <TableCell align="right">{row.ownerId}</TableCell>
        </TableRow>
    )
};

const RenderRows = ({ rowsPerPage, page, rows }) => {
    let rowItems = (rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows);
    rowItems = rowItems.map((row) => <RenderRow key={row.eventId} row={row} />);
    return <React.Fragment>{rowItems}</React.Fragment>;
}

const RenderEmptyRows = ({ rowsPerPage, page, rows }) => {
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    return (
        <React.Fragment>
            {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                </TableRow>
            )}
        </React.Fragment>
    );
}

function EventsTableBody ({ rowsPerPage, page, rows }) {
    return (
        <TableBody>
            <RenderRows rowsPerPage={rowsPerPage} page={page} rows={rows} />   
            <RenderEmptyRows rowsPerPage={rowsPerPage} page={page} rows={rows} />   
        </TableBody>
    )
}

export default EventsTableBody;