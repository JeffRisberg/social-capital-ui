import React, {Component} from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import {CardHeader} from "@mui/material";

/**
 * The welcome screen
 */
const styles = {
   grid: {
      height: '50px',
   }
};

class Home extends Component {

   render() {
      return (
         <div>
            <Card>
               <CardHeader title="Social Capital Tracking"/>
               <CardContent>
                  <div style={styles.grid}>
                     Welcome to the Social Capital Tracking System.
                  </div>
               </CardContent>
            </Card>
         </div>
      )
   }
}

export default Home;
