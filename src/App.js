import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Paper from '@mui/material/Paper';
import {ThemeProvider} from "@mui/material";

import lightBlue from '@mui/material/colors/lightBlue';
import grey from '@mui/material/colors/grey';
import {createTheme} from '@mui/material/styles';

import Home from './containers/Home';
import {Navigation} from "./components/Navigation";
import {Footer} from './components/Footer';
import ByStudentPage from './containers/ByStudent/ByStudentPage';
import OverTimePage from './containers/OverTime/OverTimePage';

const theme = createTheme({
   typography: {
      useNextVariants: true,
   },
   palette: {
      primary: '#77acee',
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
      <ThemeProvider theme={theme}>
         <BrowserRouter>
            <Paper>
               <Navigation/>
               <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="byStudent" element={<ByStudentPage/>}/>
                  <Route path="overTime" element={<OverTimePage/>}/>
               </Routes>
               <Footer/>
            </Paper>
         </BrowserRouter>
      </ThemeProvider>
   )
}
