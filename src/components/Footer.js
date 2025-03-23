import React from 'react';
import Typography from "@mui/material/Typography";

const styles = {
   root: {
      marginTop: '10px',
      padding: '6px',
      background: '#eee'
   },
   item: {
      fontWeight: '700'
   },
};

export function Footer() {
   const classes = styles;

   return (
      <div sx={classes.root}>
         <Typography sx={classes.item}>
            Making Waves Education Foundation:  Social Capital Metrics Tracking
         </Typography>
      </div>
   );
}
