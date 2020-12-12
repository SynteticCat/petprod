import React from 'react';
import EventsTable from './EventsTable/EventsTable';
import ControlPanel from './ControlPanel/ControlPanel';
import NavigationBar from './NavigationBar/NavigationBar';

function Main() {
  return (
    <div>
      <NavigationBar />
      <div className="workspace">
        <EventsTable />
        <ControlPanel />
      </div>
    </div>
  );
}

export default Main;