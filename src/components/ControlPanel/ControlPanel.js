import React from 'react';
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import Event from './EventComponent';
import User from './UserComponent';
import Owner from './OwnerComponent';

function ControlPanel() {
  return (
      <Card>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="100px"
          style={{width: "500px"}}
          image="assets/images/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="h5" component="h2">Фильтры</Typography>
          <Event />
          <Owner />
          <User />
        </CardContent>
    </Card>
  );
}

export default ControlPanel;
