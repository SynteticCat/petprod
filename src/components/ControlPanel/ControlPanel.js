import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
// import EventTimerRange from './EventTimeRange/EventTimeRange.js';
import styles from './style.module.css';

export default function SimpleContainer() {
  return (
    <div className={styles.panel}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#ffffff', height: '50vh', weight: '50vh' }}> 
        {/* <EventTimerRange /> */}
        </Typography>
      </Container>
    </div>
  );
}