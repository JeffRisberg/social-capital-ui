import React from 'react';
import {NavLink} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const styles = {
   root: {
      width: '100%',
   },
   title: {
      display: 'block',
   },
   navLink: {
      textDecoration: 'none',
      marginLeft: 10,
      marginRight: 10,
      fontFamily: 'Arial',
      fontSize: 22
   },
};

export function Navigation(props) {
   const classes = styles;

   return (
      <div sx={classes.root}>
         <AppBar position="static">
            <Toolbar>
               <NavLink style={classes.navLink} to='/'>
                  Home
               </NavLink>
               <NavLink style={classes.navLink} to='/byStudent'>
                  By Student
               </NavLink>
               <NavLink style={classes.navLink} to='/overTime'>
                  Over Time
               </NavLink>
            </Toolbar>
         </AppBar>
      </div>
   );
}
