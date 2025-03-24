import React from 'react';
import {Card, CardContent, CardHeader, Typography} from "@mui/material";

const styles = {
   item: {},
   itemContent: {},
};

export function DimensionCard(props) {
   const {title, color, data} = props;
   const classes = styles;

   return (
      <Card style={classes.item}>
         <CardHeader style={{padding: '10px 10px 10px 20px', background: color, color: "white"}}
                     title={title}/>
         <CardContent>
            <div style={classes.itemContent}>
               <table>
                  {data.map((item, index) => {
                     return (
                        <tr key={index}>
                           <td>
                              <Typography sx={{fontFamily: 'Arial'}}>
                                 {item.label}
                              </Typography>
                           </td>
                           <td>
                              <Typography sx={{fontFamily: 'Arial', fontSize: '13pt', fontWeight: 'bold', paddingLeft: '10px'}}>
                                 {item.value}
                              </Typography>
                           </td>
                        </tr>
                     );
                  })}
               </table>
            </div>
         </CardContent>
      </Card>
   );
}
