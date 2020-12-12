import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, AccordionActions,
  TextField, Typography, Button, Checkbox } from '@material-ui/core';
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
    marginRight: "12px",
    width: "70px"
  },

  row: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },

  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },

  textfield: {
    marginBottom: "6px"
  }
}));

function Event() {
  const classes = useStyles();

  return (
    <Accordion defaultExpanded>

    <AccordionSummary
        // expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
    >
        <div className={classes.row}>
        <Typography className={classes.heading}>Событие</Typography>
        </div>
    </AccordionSummary>

    <AccordionDetails>
        <div className={classes.column}>

            <div className={classes.row}>
                <div className={classes.colparam}>id:</div>
                <div className={classes.column}>
                    <TextField className={classes.textfield} size="small" variant="outlined" type="number" label="начальный id" />
                    <TextField className={classes.textfield} size="small" variant="outlined" type="number" label="конечный id" />
                </div>    
            </div>

            <div className={classes.row}>
                <div className={classes.colparam}>дата:</div>
                <div className={classes.column}>
                    <TextField className={classes.textfield} size="small" variant="outlined" type="datetime-local" />
                    <TextField className={classes.textfield} size="small" variant="outlined" type="datetime-local" />
                </div>    
            </div>

            <div className={classes.row}>
                <div className={classes.colparam}>нарушение:</div>
                <Checkbox color="primary" />
            </div>
        </div>
    </AccordionDetails>

    <AccordionActions> 
        <Button size="small" variant="contained" color="primary">Применить</Button>
    </AccordionActions>

    </Accordion>
  );
}

export default Event;