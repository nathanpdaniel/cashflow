import React, { PureComponent } from 'react';
import { browserHistory } from 'react-router';
import { Grid, Button, Checkbox } from 'material-ui';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Back from 'material-ui-icons/NavigateBefore';

class Suppliers extends PureComponent {
  render() {
    return <div>
    <Grid container={true} spacing={24} style={{ width: 800, margin: '0 auto' }}>
      <Grid item xs={12}>
        <img src="/images/usbankcashflowlogo.png" height={100} />
      </Grid>
      <Grid item xs={6}>
        <Button onClick={() => browserHistory.push('/dashboard')}><Back />Dashboard</Button>
      </Grid>
      <Grid item xs={6} style={{ textAlign: 'right' }}>
        <Button onClick={() => browserHistory.push('/supplier')}>+ Add Supplier</Button>
      </Grid>
      <Grid item xs={12}>
        <Paper style={{ padding: 24 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Visa</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Ballons R Us</TableCell>
                <TableCell>123 A St, Atlanta, GA  30363</TableCell>
                <TableCell><Checkbox checked={true} /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Flower Supply</TableCell>
                <TableCell>2 Hydrangea Ave, Atlanta, GA  30308</TableCell>
                <TableCell><Checkbox checked={true} /></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>All the Plants</TableCell>
                <TableCell>Garden St, Atlanta, GA  30307</TableCell>
                <TableCell><Checkbox checked={true} /></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    </Grid>
  </div>
  }
}

export default Suppliers;