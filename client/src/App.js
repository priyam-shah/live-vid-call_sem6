import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';
// import logo from './components/logo.png';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid black',
    padding: '10px 500px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  image: {
    marginLeft: '10px',
    marginTop: '5px',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">LMS</Typography>
      </AppBar>
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
    </div>
  );
};

export default App;

// <div className={classes.brandContainer}>
//           {/* <img
//           className={classes.image}
//           src={logo}
//           alt="icon"
//           height="120px"
//           /> */}
//           <Typography
//             variant="h2"
//             align="center"
//            >
//           Live Lectures by LMS
//           </Typography>
//         </div>
