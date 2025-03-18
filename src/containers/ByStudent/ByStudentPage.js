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
import './ByStudentPage.style.scss'
import {BarChart} from "@mui/icons-material";

function StudentCard({student}) {
   return (
      <Card sx={{minWidth: 275}}>
         <CardContent>
            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
               {student.dimension1}
            </Typography>
            <Typography>
               {student.dimension2}
            </Typography>
            <Typography>
               {student.dimension3}
            </Typography>
            <Typography>
               {student.dimension4}
            </Typography>
         </CardContent>
         <CardActions>
            <Button size="small">Learn More</Button>
         </CardActions>
      </Card>
   );
}

export default function ByStudentPage() {
   const dispatch = useDispatch();

   const studentList = useSelector((state) => state.students.results)

   React.useEffect(() => {
      dispatch(fetchStudents())
   }, []);

   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
   };

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
                  <TextField label="Search by student name" variant="outlined" fullWidth/>
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
                        <TableCell>Name</TableCell>
                        <TableCell>Peer Networks</TableCell>
                        <TableCell>Mentorship Access</TableCell>
                        <TableCell>Community Engagement</TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     <TableRow>
                        <TableCell>John Doe</TableCell>
                        <TableCell>High</TableCell>
                        <TableCell>Medium</TableCell>
                        <TableCell>High</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>Jane Smith</TableCell>
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
