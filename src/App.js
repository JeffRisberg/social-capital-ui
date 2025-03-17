import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Paper from '@mui/material/Paper';
import {Navigation} from "./components/Navigation";
import {Footer} from './components/Footer';
import Home from './containers/Home';
import ByStudentPage from './containers/ByStudent/ByStudentPage';
import OverTimePage from './containers/OverTime/OverTimePage';

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
               <Route path="byStudent" element={<ByStudentPage/>}/>
               <Route path="overTime" element={<OverTimePage/>}/>
            </Routes>
            <Footer/>
         </Paper>
      </BrowserRouter>
   )
}
