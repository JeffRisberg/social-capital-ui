import * as React from 'react';
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';
import {useDispatch} from "react-redux";
import {postBot} from "./botsSlice";
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
      <div className='form'>
         <h1>Overtime Analysis</h1>
         <TextField
            id="name"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
         />
         <Button onClick={submitQuery}>Submit</Button>
      </div>
   );
}
