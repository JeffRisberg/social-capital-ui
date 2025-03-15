import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import icon from '../../assets/img/chatbot_icon.jpeg';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import ResponsiveAppBar from '../LandingPage/AppBar';
import {DataSourceList} from '../../components/DataSourceList';
import {postAsk} from "../NewBot/botsSlice";
import './ChatPage.style.scss'

const ChatTile = ({isBot, text}) => {
    return (
        <div className='tile'>
            <div className='icon'>
                {isBot ? <img src={icon} alt="Icon" className='chatIcon'/> :
                    <AdbIcon fontSize='large'/>}
            </div>
            <h2>{text}</h2>
        </div>
    )
}

export default function ChatPage() {
    const [entered, setEntered] = React.useState('');
    const [chats, setChats] = React.useState([]);

    const dispatch = useDispatch();

    const askResults = useSelector((state) => state.postAsk)

    const submitAsk = (event) => {
        //dispatch(postAsk({entered}))
        console.log(event)
        setChats(["alpha", "beta"])
        dispatch(postAsk({"text": "I need help with Apple"}))

        // setEntered("")
    }

    return (
        <div className='page'>
            <ResponsiveAppBar/>
            <div className='chat'>
                <div>
                    <ChatTile isBot={false} text="test1"/>
                    <ChatTile isBot={true} text="test2"/>

                    {chats.map((c, i) =>
                        <ChatTile key={i} isBot={false} text={c}/>
                    )}
                </div>
                <DataSourceList/>
            </div>
            <div className='chatSubmit'>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    className='enterChat'
                    width={800}
                >
                    <FormControl fullWidth>
                        <TextField id="outlined-basic" label="Enter Chat" variant="outlined"
                                   value={entered}
                                   onChange={(event) => {
                                       setEntered(event.target.value);
                                   }}/>
                    </FormControl>
                </Box>
                <Button onClick={(e) => {
                    submitAsk(e)
                    console.log(askResults)
                    // setChats([...chats, entered, askResults])
                }}>Submit</Button>
            </div>
        </div>
    );
}
