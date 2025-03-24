import * as React from 'react';
import {useDispatch} from "react-redux";
import {
   Button,
   Card,
   CardContent,
   CardHeader,
   MenuItem,
   Select,
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableRow
} from '@mui/material';
import {postBot} from "./botsSlice";
import {BarChart, BarPlot} from '@mui/x-charts';


const styles = {
   item: {
      background: '#e0e0e0'
   },
   itemContent: {
      height: '70px',
      fontFamily: 'Arial'
   }
};
export default function OverTimePage() {
   const dispatch = useDispatch();

   const [name, setName] = React.useState('');
   const [domain, setDomain] = React.useState('');
   const [url, setUrl] = React.useState('');

   const data = [
      { x: 'Dimension A', y: 25 },
      { x: 'Dimension B', y: 40 },
      { x: 'Dimension C', y: 30 },
      { x: 'Dimension D', y: 44 },
      ];
   const handleChange = (event) => {
      setDomain(event.target.value);
   };

   const submitQuery = (event) => {
      dispatch(postBot({name, domain, url}))
   }

   const classes = styles;

   return (
      <div style={{padding: '24px', gap: '24px'}}>
         <Card>
            <CardHeader title="Student Social Capital Report - Trends Over Time"/>
            <CardContent>
               <div style={{display: 'flex', gap: '16px'}}>
                  <Select defaultValue="all" variant="outlined">
                     <MenuItem value="all">All Years</MenuItem>
                     <MenuItem value="2022">2022</MenuItem>
                     <MenuItem value="2023">2023</MenuItem>
                     <MenuItem value="2024">2024</MenuItem>
                     <MenuItem value="2025">2025</MenuItem>
                  </Select>
                  <Button variant="contained">Filter</Button>
               </div>
            </CardContent>
         </Card>

         <Card>
            <CardHeader title="Social Capital Metrics, for each Dimension, by Year"/>
            <CardContent sx={{border: "1px solid black", height: '230px'}}>
               <BarChart
                  series={[
                     { data: [35, 44, 44, 54] },
                     { data: [31, 43, 46, 52] },
                     { data: [39, 49, 55, 59] },
                     { data: [42, 47, 55, 62] },
                  ]}
                  colors={['black', '#339933', '#cd3333', '#65b7e7']}
                  height={230}
                  xAxis={[{ data: ['2022', '2023', '2024', '2025'], scaleType: 'band' }]}
                  margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
               />
            </CardContent>
         </Card>

         <Card>
            <CardHeader title="Overtime Trends"/>
            <CardContent>
               <Table>
                  <TableHead>
                     <TableRow>
                        <TableCell>Time Period</TableCell>
                        <TableCell>Peer Networks</TableCell>
                        <TableCell>Mentorship Access</TableCell>
                        <TableCell>Community Engagement</TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     <TableRow>
                        <TableCell>2022</TableCell>
                        <TableCell>High</TableCell>
                        <TableCell>Medium</TableCell>
                        <TableCell>High</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>2023</TableCell>
                        <TableCell>Medium</TableCell>
                        <TableCell>Medium</TableCell>
                        <TableCell>Low</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>2024</TableCell>
                        <TableCell>Medium</TableCell>
                        <TableCell>High</TableCell>
                        <TableCell>Medium</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>2025</TableCell>
                        <TableCell>Medium</TableCell>
                        <TableCell>High</TableCell>
                        <TableCell>High</TableCell>
                     </TableRow>
                  </TableBody>
               </Table>
            </CardContent>
         </Card>
      </div>
   );
}
