import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Card, CardHeader, Grid, MenuItem, Tab, Tabs} from '@mui/material';
import TextField from "@mui/material/TextField";
import Select from '@mui/material/Select';
import CardContent from '@mui/material/CardContent';
import {DimensionCard} from "../../components/DimensionCard";
import {DIMENSIONS} from "../../utils/constants";
import {fetchStudents} from "./studentsSlice";

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

   console.log(studentList);

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

         <Grid container spacing={4}
               direction="row"
               justifyContent="space-evenly"
               alignItems="flex-start"
               style={{minHeight: '29vh'}}
         >
            {DIMENSIONS.map((dimension, index) => {
               return (
                  <Grid item md={6} key={index}>
                     <DimensionCard title={dimension.title} color={dimension.color}
                                    data={dimension.metrics.map((metric, index) => {
                                       return {label: metric.label, value: metric.default}
                                    })}
                     />
                  </Grid>
               );
            })}
         </Grid>
      </div>
   );
}
