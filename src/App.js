import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Paper from '@mui/material/Paper';
import {Navigation} from "./components/Navigation";
import {Footer} from './components/Footer';
import Home from './containers/Home';
import LandingPage from './containers/LandingPage/LandingPage';
import NewBotPage from './containers/NewBot/NewBotPage';
import ChatPage from "./containers/Chat/ChatPage";

import lightBlue from '@mui/material/colors/lightBlue';
import grey from '@mui/material/colors/grey';
import {createTheme} from '@mui/material/styles';

const styles = {
   root: {
      textAlign: 'center',
      paddingTop: 200,
      marginLeft: 'auto',
      marginRight: 'auto',
      width: 500,
   },
   app: {
      maxWidth: 1200,
      margin: 'auto'
   },
   card: {
      paddingTop: 40,
      paddingRight: 20,
      paddingBottom: 20,
      paddingLeft: 20,
   },
};

const theme = createTheme({
   typography: {
      useNextVariants: true,
   },
   palette: {
      primary: lightBlue,
      secondary: grey,
      text: {
         primary: '#000',
         secondary: '#888'
      }
   },
   status: {
      danger: 'orange',
   },
});

export default function App() {
   return (
      <BrowserRouter>
         <Paper>
            <Navigation/>
            <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="landingPage" element={<LandingPage/>}/>
               <Route path="newBot" element={<NewBotPage/>}/>
               <Route path="chat" element={<ChatPage/>}/>
            </Routes>
            <Footer/>
         </Paper>
      </BrowserRouter>
   )
}
