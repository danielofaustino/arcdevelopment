import React, {  useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";


//importing logo
import logo from '../../assets/logo.png';

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
    ...theme.mixins.toolbar, // Spread operator to pull all information in Theme
    marginBottom: "3em"
   },
   logo: {
     height: "3em",
     maxWidth: "14rem",
     marginRight: '1rem',
     marginLeft:'1rem'
   },
   logoContainer:{
    padding:0
    
   },
   tabContainer:{
     marginLeft:'auto'
   },
   tab: {
     ...theme.typography.tab,
     borderRadius:"5px",
     minWidth:10,
     marginLeft:"25px"
     
   },
   button: {
     ...theme.typography.whatsapp,
     borderRadius:"50px",
     marginLeft:"50px",
     marginRight:"25px",
     height: "45px"
     

   }
}));



// Header component function
export default function Header(props) {

  const classes = useStyles()
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value)
  }

  useEffect(() =>{
    if(window.location.pathname === "/" && value !== 0){
      setValue(0)
    } else if(window.location.pathname === "/services" && value !== 1){
      setValue(1)
    } else if(window.location.pathname === "/revolution" && value !== 2){
      setValue(2)
    } else if(window.location.pathname === "/about" && value !== 3){
      setValue(3)
    } else if(window.location.pathname === "/contact" && value !== 4){
      setValue(4)
    } else if(window.location.pathname === "/estimate" && value !== 5){
      setValue(5)
    } 
  },[value]);

  

  return(
    <>
      <ElevationScroll>
      <AppBar position="fixed"> 
        <Toolbar disableGutters>
          <Button className={classes.logoContainer} component ={Link} to="/">
           <img src={logo} alt="company logo" className={classes.logo} />
           </Button>
           <Tabs
            value={value} 
             onChange={handleChange} 
             className={classes.tabContainer}
             indicatorColor="secondary" // don't show the underline 
             
            >
            <Tab className={classes.tab} component={Link} to="/" label="Home" />
            <Tab className={classes.tab} component={Link} to="/services" label="Serviços" />
            <Tab className={classes.tab} component={Link} to="/revolution" label="A Revolução" />
            <Tab className={classes.tab} component={Link} to="/about" label="Sobre nós" />
            <Tab className={classes.tab} component={Link} to="/contact" label="Contato" />
          </Tabs>
          <Button variant="contained" color="secondary" className={classes.button}>
            WhatsApp
          </Button>

        </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );

}