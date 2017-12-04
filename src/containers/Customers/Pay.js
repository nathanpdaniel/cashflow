import React, { PureComponent } from 'react';
import { browserHistory } from 'react-router';
import { Grid, Button, Checkbox } from 'material-ui';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Back from 'material-ui-icons/NavigateBefore';
import TextField from 'material-ui/TextField';
import { FormGroup, FormControlLabel } from 'material-ui/Form';

class Pay extends PureComponent {
  render() {
    return <div>
      <Grid container={true} spacing={24} style={{ width: 800, margin: '0 auto' }}>
        <Grid item xs={12}>
          <img src="/images/usbankcashflowlogo.png" height={100} />
        </Grid>
        <Grid item xs={6}>
          <Button onClick={() => browserHistory.push('/dashboard')}><Back /> Dashboard</Button>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'right' }}>
          Take Payment
        </Grid>
        <Grid item xs={12}>
          <Paper style={{ padding: 24 }}>
            <TextField
              id="name"
              label="Credit Card"
              margin="normal"
              fullWidth
            />
            <TextField
              id="address"
              label="CCV"
              margin="normal"
              fullWidth
            />
            <TextField id="city" label="Expiration" margin="normal" fullWidth />
            <div style={{ textAlign: 'right' }}>
              <Button raised={true} onClick={() => browserHistory.push('/dashboard')}>Save</Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  };
}

export default Pay;