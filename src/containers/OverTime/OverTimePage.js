import * as React from 'react';
import {useDispatch} from "react-redux";
import {Button, Card, CardContent, CardHeader, Grid, MenuItem, Select} from '@mui/material';
import {postBot} from "./botsSlice";

import {DimensionCard} from "../../components/DimensionCard";

import {DIMENSIONS} from "../../utils/constants";

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

   const classes = styles;

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
                                       return {label: metric.label, value: metric.default}})}
                     />
                  </Grid>
               );
            })}
         </Grid>
      </div>
   );
}
