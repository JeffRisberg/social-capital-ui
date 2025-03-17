import * as React from 'react';
import TextField from '@mui/material/TextField';
import {Button, Card, CardHeader, MenuItem, Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import {useDispatch} from "react-redux";
import {postBot} from "./botsSlice";
import CardContent from "@mui/material/CardContent";
import Select from "@mui/material/Select";
import './OverTimePage.style.scss'

export default function OverTimePage() {
   const [name, setName] = React.useState('');
   const [domain, setDomain] = React.useState('');
   const [url, setUrl] = React.useState('');
   const dispatch = useDispatch();

   const handleChange = (event) => {
      setDomain(event.target.value);
   };


   const submitQuery = (event) => {
      dispatch(postBot({name, domain, url}))
   }

   return (
      <div style={{padding: '24px', gap: '24px'}}>
         <Card>
            <CardHeader title="Student Social Capital Report - Trends Over Time"/>
            <CardContent>
               <div style={{display: 'flex', gap: '16px'}}>
                  <Select defaultValue="all" variant="outlined">
                     <MenuItem value="all">All Years</MenuItem>
                     <MenuItem value="2023">2023</MenuItem>
                     <MenuItem value="2024">2024</MenuItem>
                  </Select>
                  <Button variant="contained">Filter</Button>
               </div>
            </CardContent>
         </Card>
         <Card>
            <CardHeader title="Trends"/>
            <CardContent>
               <Table>
                  <TableHead>
                     <TableRow>
                        <TableCell>Peer Networks</TableCell>
                        <TableCell>Mentorship Access</TableCell>
                        <TableCell>Community Engagement</TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     <TableRow>
                        <TableCell>High</TableCell>
                        <TableCell>Medium</TableCell>
                        <TableCell>High</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>Medium</TableCell>
                        <TableCell>High</TableCell>
                        <TableCell>Low</TableCell>
                     </TableRow>
                  </TableBody>
               </Table>
            </CardContent>
         </Card>
      </div>
   );
}
