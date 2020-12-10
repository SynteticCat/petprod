import React from 'react'
import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import TablePaginationActions from './TablePaginationActions'

export default function EventsTableFooter(props) {
    return (
        <TableFooter>
            <TableRow>
                <TablePagination
                    rowsPerPageOptions={[5, 7, 10, { label: 'All', value: -1 }]}
                    SelectProps={{
                        inputProps: { 'aria-label': 'Отображается строк на странице' },
                        native: true,
                    }}
                    labelRowsPerPage={'Отображается строк на странице'}
                    colSpan={3}
                    count={props.rows.length}
                    rowsPerPage={props.rowsPerPage}
                    page={props.page}
                    onChangePage={props.handleChangePage}
                    onChangeRowsPerPage={props.handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                />
            </TableRow>
        </TableFooter>
    )
}