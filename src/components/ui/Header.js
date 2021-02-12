import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles'

//importing logo
import logo from '../../assets/logo.png'

// function NavBar Elevation 
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}


// makeStyles to use customization inline
const useStyles = makeStyles(theme =>({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1em"
   },
   logo: {
     height: "3em"
   }
}))



// Header component function
export default function Header(props) {

  const classes = useStyles()

  return(
    <React.Fragment>
      <ElevationScroll>
      <AppBar position="fixed"> 
          <Toolbar disableGutters>
           <img alt="company logo" className={classes.logo} src={logo} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )

}