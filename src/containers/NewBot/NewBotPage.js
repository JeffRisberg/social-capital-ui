import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button } from '@mui/material';
import {useDispatch} from "react-redux";
import {postBot} from "./botsSlice";
import './NewBotPage.style.scss'

export default function NewBotPage() {
    const [name, setName] = React.useState('');
    const [domain, setDomain] = React.useState('');
    const [url, setUrl] = React.useState('');


    const handleChange = (event) => {
        setDomain(event.target.value);
    };

    const dispatch = useDispatch();

    const submitNewBot = (event) => {
        dispatch(postBot({name, domain, url}))
    }

    return (
        <div className='form'>
            <h1>Create New Bot</h1>
            <Box
                component="form"
                noValidate
                autoComplete="off"
            >
                <FormControl fullWidth>
                <TextField id="outlined-basic" label="Bot Name" variant="outlined"
                           onChange={(event)=> setName(event.target.value)} value={name}/>
                </FormControl>
            </Box>
            <Box
                component="form"
                noValidate
                autoComplete="off"
            >
                <FormControl fullWidth>
                    <TextField id="outlined-basic" label="URL" variant="outlined"
                    onChange={(event)=> setUrl(event.target.value)} value={url}/>
                </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Domain</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={domain}
                        label="Domain"
                        onChange={handleChange}
                    >
                        <MenuItem value={'IT'}>IT</MenuItem>
                        <MenuItem value={'HR'}>HR</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Button onClick={submitNewBot}>Submit</Button>
        </div>
    );
}
