import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


//importing logo
import logo from '../../assets/logo.png'

// function NavBar Elevation 
function ElevationScroll(props) {

  const { children } = props;
 
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
   
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}


// makeStyles to use customization inline
const useStyles = makeStyles(theme =>({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em"
   },
   logo: {
     height: "3em",
     maxWidth: 220,
     marginRight: '10px'
   }
}));



// Header component function
export default function Header(props) {

  const classes = useStyles()

  return(
    <>
      <ElevationScroll>
      <AppBar position="fixed"> 
        <Toolbar disableGutters>
           <img src={logo} alt="company logo" className={classes.logo} />
           <Tabs>
            <Tab label="Home" />
            <Tab label="Serviços" />
            <Tab label="A Revolução" />
            <Tab label="Sobre nós" />
            <Tab label="Contato" />
          </Tabs>
        </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );

}