import React from 'react';
import {NavLink} from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const styles = {
   root: {
      width: '100%',
   },
   grow: {
      flexGrow: 1,
   },
   menuButton: {
      marginLeft: -12,
      marginRight: 20,
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
   search: {
      position: 'relative',
      //borderRadius: theme.shape.borderRadius,
      //backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
         backgroundColor: "white" //fade(theme.palette.common.white, 0.25),
      },
      //marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%'
   },
   searchIcon: {
      //width: theme.spacing(9),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
   inputRoot: {
      color: 'inherit',
      width: '100%',
   },
   inputInput: {
      width: '100%'
   },
   sectionDesktop: {
      display: 'flex',
   },
   sectionMobile: {
      display: 'flex',
   }
};

export function Navigation(props) {
   const classes = styles;

   let title = "MUI07"; // history.location.pathname.replace(/^\/([^/]*)(?:[/\d]+([^/]+))?.*?$/, '$1 $2');

   if (title === null || title === '' || title === ' ') {
      title = 'Home';
   }

   return (
      <div sx={classes.root}>
         <AppBar position="static">
            <Toolbar>
               <NavLink style={classes.navLink} to='/'>
                  Home
               </NavLink>
               <NavLink style={classes.navLink} to='landingPage'>
                  Landing Page
               </NavLink>
               <NavLink style={classes.navLink} to='newBot'>
                  New Bot
               </NavLink>
               <NavLink style={classes.navLink} to='chat'>
                  Chat
               </NavLink>
            </Toolbar>
         </AppBar>
      </div>
   );
}
