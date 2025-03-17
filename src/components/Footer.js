import React from 'react';
import Typography from "@mui/material/Typography";

const styles = {
   root: {
      marginTop: '10px',
      padding: '6px',
      background: '#eee'
   },
};

export function Footer(props) {
   const {classes} = props;

   return (
      <div>
         <Typography>
            Making Waves Education Foundation:  Social Capital Metrics Tracking
         </Typography>
      </div>
   );
}
