import React, {Component} from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import {CardHeader, Grid} from "@mui/material";

const styles = {
   item: {
     background: '#f8c751'
   },
   itemContent: {
      height: '70px',
      fontFamily: 'Arial'
   }
};

class Home extends Component {

   render() {
      const classes = styles;

      return (
         <Grid container spacing={4}
               direction="row"
               justifyContent="space-evenly"
               alignItems="center"
               style={{minHeight: '29vh'}}
         >
            <Grid item xs={3} sm={6} md={4}>
               <Card style={classes.item}>
                  <CardHeader title="Social Capital Tracking"/>
                  <CardContent>
                     <div style={classes.itemContent}>
                        Welcome to the Social Capital Tracking System.
                     </div>
                  </CardContent>
               </Card>
            </Grid>
            <Grid item xs={3} sm={6} md={4}>
               <Card style={classes.item}>
                  <CardHeader title="Input Form"/>
                  <CardContent>
                     <div style={classes.itemContent}>
                        <a href="https://docs.google.com/forms/d/17a0gNxn3-OeRPuv_1JXSTzLUDZwTHTEuW1n6wKC1lMg/edit">
                           Google Form
                        </a>
                        <br/>
                        This is a survey of students
                     </div>
                  </CardContent>
               </Card>
            </Grid>
            <Grid item xs={3} sm={6} md={4}>
               <Card style={classes.item}>
                  <CardHeader title="Data Analysis"/>
                  <CardContent>
                     <div style={classes.itemContent}>
                        <ul style={{margin: '0px'}}>
                           <li>Analysis by year</li>
                           <li>Analysis by student</li>
                        </ul>
                     </div>
                  </CardContent>
               </Card>
            </Grid>
         </Grid>
      )
   }
}

export default Home;
