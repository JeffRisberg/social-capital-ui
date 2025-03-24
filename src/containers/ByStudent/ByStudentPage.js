import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
   Button,
   Card,
   CardHeader,
   MenuItem,
   Tab,
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableRow,
   Tabs
} from '@mui/material';
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {fetchStudents} from "./studentsSlice";
import {BarChart} from "@mui/icons-material";


const styles = {
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
};

export default function ByStudentPage() {
   const dispatch = useDispatch();

   const studentList = useSelector((state) => state.students.results)

   React.useEffect(() => {
      dispatch(fetchStudents())
   }, []);

   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const uData = [4000, 3000, 2000, 2780];
   const pData = [2400, 1398, 9800, 3908];
   const amtData = [2400, 2210, 2290, 2000];

   const xLabels = [
      'Dimension 1',
      'Dimension 2',
      'Dimension 3',
      'Dimension 4',
   ];

   return (
      <div style={{padding: '24px', gap: '24px'}}>
         <Card>
            <CardHeader title="Student Social Capital Report - By Student"/>
            <CardContent>
               <div style={{display: 'flex', gap: '16px'}}>
                  <TextField label="Search by student id" variant="outlined" fullWidth/>
                  <Select defaultValue="all" variant="outlined">
                     <MenuItem value="all">All Years</MenuItem>
                     <MenuItem value="2023">2023</MenuItem>
                     <MenuItem value="2024">2024</MenuItem>
                  </Select>
                  <Button variant="contained">Filter</Button>
               </div>
            </CardContent>
         </Card>

         <Tabs value={0} aria-label="report tabs">
            <Tab label="Overview"/>
            <Tab label="Detailed Report"/>
         </Tabs>

         <Card>
            <CardHeader title="Social Capital Metrics"/>
            <CardContent sx={{border: "1px solid black"}}>
               <BarChart
                  width={1200}
                  height={800}
                  series={[
                     { data: pData, label: 'pv', stack: 'stack1' },
                     { data: amtData, label: 'amt' },
                     { data: uData, label: 'uv', stack: 'stack1' },
                  ]}
                  xAxis={[{ data: xLabels, scaleType: 'band' }]}
               />
            </CardContent>
         </Card>

         <Card>
            <CardHeader title="Students Overview"/>
            <CardContent>
               <Table>
                  <TableHead>
                     <TableRow>
                        <TableCell>Student Id</TableCell>
                        <TableCell>Peer Networks</TableCell>
                        <TableCell>Mentorship Access</TableCell>
                        <TableCell>Community Engagement</TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     <TableRow>
                        <TableCell>#123452</TableCell>
                        <TableCell>High</TableCell>
                        <TableCell>Medium</TableCell>
                        <TableCell>High</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>#125032</TableCell>
                        <TableCell>Medium</TableCell>
                        <TableCell>Medium</TableCell>
                        <TableCell>Low</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>#125099</TableCell>
                        <TableCell>Medium</TableCell>
                        <TableCell>High</TableCell>
                        <TableCell>Medium</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>#124672</TableCell>
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
