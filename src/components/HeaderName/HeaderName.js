import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SimpleMenu from '../NavigationBar/NavigationBarItem/NavigationBarItem.js';
import { Typography, AppBar, Toolbar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function HeaderName() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <SimpleMenu />
          <Typography variant="h6" color="inherit">
            Мониторинг Системы терминалов контроля доступа
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default HeaderName; 