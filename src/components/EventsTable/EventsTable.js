import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import EventsTableBody from './EventsTableBody';
import EventsTableHead from './EventsTableHead';
import EventsTableFooter from './EventsTableFooter';
import Paper from '@material-ui/core/Paper';

export default function EventsTable() {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);
  const [rows, setRows] = React.useState([
    { id: 1, eventTime: '13.12.2020, 13:41', isViolation: true, ownerId: 12, userId: 8 },
    { id: 2, eventTime: '13.12.2020, 7:03', isViolation: false, ownerId: 2, userId: 23 },
    { id: 3, eventTime: '13.12.2020, 12:28', isViolation: true, ownerId: 3, userId: 3 },
    { id: 4, eventTime: '13.12.2020, 3:40', isViolation: true, ownerId: 9, userId: 13 },
    { id: 5, eventTime: '13.12.2020, 17:46', isViolation: true, ownerId: 5, userId: 2 },
    { id: 6, eventTime: '13.12.2020, 13:43', isViolation: true, ownerId: 11, userId: 1 },
    { id: 7, eventTime: '13.12.2020, 12:11', isViolation: false, ownerId: 15, userId: 1 },
    { id: 8, eventTime: '13.12.2020, 14:53', isViolation: true, ownerId: 7, userId: 3 },
    { id: 9, eventTime: '13.12.2020, 2:07', isViolation: true, ownerId: 4, userId: 4 },
    { id: 10, eventTime: '13.12.2020, 13:43', isViolation: true, ownerId: 5, userId: 17 },
    { id: 11, eventTime: '13.12.2020, 7:24', isViolation: true, ownerId: 5, userId: 1 },
    { id: 12, eventTime: '13.12.2020, 5:13', isViolation: false, ownerId: 1, userId: 12 },
    { id: 13, eventTime: '13.12.2020, 11:20', isViolation: true, ownerId: 3, userId: 12 },
    { id: 14, eventTime: '13.12.2020, 11:45', isViolation: true, ownerId: 2, userId: 4 },
    { id: 15, eventTime: '13.12.2020, 9:04', isViolation: true, ownerId: 5, userId: 5 }
  ]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  React.useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);

  if (error) {
    return 'Error on server';
  } else if (!isLoaded) {
    return 'Loading...';
  } else {
    return (
      <div className="table">
        <TableContainer component={Paper}>
          <Table>
            <EventsTableHead />
            <EventsTableBody
              rowsPerPage={rowsPerPage}
              rows={rows}
              page={page}
            />
            <EventsTableFooter
              rows={rows}
              rowsPerPage={rowsPerPage}
              page={page}
              handleChangePage={handleChangePage}
              handleChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Table>
        </TableContainer>
      </div>
    );
  }
}
