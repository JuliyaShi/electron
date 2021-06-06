import React from 'react';
import {
  Button,
  Grid,
  Container
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import history from './history'

export default function Buttons() {
    return(
  <Container>
    <Grid>
      <Grid.Column textAlign='center'>
        <Button onClick={() => history.push('/Vehicles')}>Vehicles</Button>
        <Button onClick={() => history.push('/Characters')}>Characters</Button>
      </Grid.Column>
    </Grid>
  </Container>
  )
};
