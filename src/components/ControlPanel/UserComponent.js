import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, AccordionActions,
  TextField, Typography, Button } from '@material-ui/core';
// import { ExpandMoreIcon } from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    marginRight: "12px"
  },

  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },

  colparam: {
    marginRight: "12px"
  },

  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
}));

function User() {
  const classes = useStyles();

  return (
    <Accordion>

      <AccordionSummary
        // expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <div className={classes.row}>
          <Typography className={classes.heading}>Пользователь карты</Typography>
        </div>
      </AccordionSummary>

      <AccordionDetails>
        <div className={classes.row}>
          <div className={classes.colparam}>id:</div>
          <TextField size="small" variant="outlined" color="primary" type="number"/>
        </div>
      </AccordionDetails>

      <AccordionActions> 
        <Button size="small" variant="contained" color="primary">Применить</Button>
      </AccordionActions>

    </Accordion>
  );
}

export default User;