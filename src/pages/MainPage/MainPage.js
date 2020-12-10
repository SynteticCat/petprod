import React from 'react';
import EventsTable from '../../components/EventsTable/EventsTable';
import ControlPanel from '../../components/ControlPanel/ControlPanel';
import styles from './style.module.css';

function MainPage() {
  return (
    <div className={styles.workspace}>
      <EventsTable />
      <ControlPanel />
    </div>
  );
}

export default MainPage;
