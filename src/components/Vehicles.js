import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

export default function Vehicles({data}){
    return (
      <>
       <h1>Vehicles</h1>
       <Grid columns={3}>
           {data.map((vehicles, i) => {
             return (
               <Grid.Column key = {i}>
                  <Card>
                     <Card.Content>
                         <Card.Header>{vehicles.name}</Card.Header>
                         <Card.Description>
                             <strong>Speed</strong>
                             <p>{vehicles.max_atmosphering_speed}</p>
                             <strong>Weight</strong>
                             <p>{vehicles.cargoCapacity}</p>
                             <strong>Passengers</strong>
                             <p>{vehicles.passengers}</p>
                         </Card.Description>
                     </Card.Content>
                  </Card>
               </Grid.Column>
             );
           }).sort((a, b) => a.max_atmosphering_speed-b.max_atmosphering_speed)}
       </Grid>
      </>
    );
}