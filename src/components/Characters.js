import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

export default function Characters({data}){
    return (
      <>
       <h1>Characters</h1>
       <Grid columns={3}>
           {data.map((people, i) => {
             return (
               <Grid.Column key = {i}>
                  <Card>
                     <Card.Content>
                         <Card.Header>{people.name}</Card.Header>
                         <Card.Description>
                             <strong>Year of birth</strong>
                             <p>{people.birth_year}</p>
                             <strong>Weight</strong>
                             <p>{people.mass}</p>
                             <strong>Eye color</strong>
                             <p>{people.eye_color}</p>
                         </Card.Description>
                     </Card.Content>
                  </Card>
               </Grid.Column>
             );
           }).sort((a, b) => a.birth_year-b.birth_year)}
       </Grid>
      </>
    );
}