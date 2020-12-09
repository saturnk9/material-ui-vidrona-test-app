import Page from 'material-ui-shell/lib/containers/Page'
import React from 'react'
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import { useIntl } from 'react-intl'
import { Card, CardHeader, Grid, SvgIcon, IconButton, Typography, CardContent} from '@material-ui/core';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  LineChart,
} from "recharts";



import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import BuildTwoToneIcon from '@material-ui/icons/BuildTwoTone';
import ContactsTwoToneIcon from '@material-ui/icons/ContactsTwoTone';
import DynamicFeedTwoToneIcon from '@material-ui/icons/DynamicFeedTwoTone';
import DvrTwoToneIcon from '@material-ui/icons/DvrTwoTone';
import StorageTwoToneIcon from '@material-ui/icons/StorageTwoTone';
import BugReportTwoToneIcon from '@material-ui/icons/BugReportTwoTone';
import CloudTwoToneIcon from '@material-ui/icons/CloudTwoTone';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import {  Button} from '@material-ui/icons'
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  
   centerText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  
  }
  
}));






const HomePage = () => {
  const intl = useIntl()

   const data = [
    {
      name: "Jan",
      critical: 400,
      healthy: 240,
      int: 240,
    },
    {
      name: "Feb",
      critical: 300,
      healthy: 138,
      int: 220,
    },
    {
      name: "Mar",
      critical: 200,
      healthy: 980,
      int: 229,
    },
    {
      name: "Apr",
      critical: 280,
      healthy: 308,
      int: 200,
    },
    {
      name: "May",
      critical: 180,
      healthy: 480,
      int: 281,
    },
  ];






const classes = useStyles();

  return (
  <>
   
    
    
    <Page pageTitle={intl.formatMessage({ id: 'Cockpit' })}>
      <Scrollbar
        style={{ height: '100%', width: '100%', display: 'flex', flex: 1 }}
      >
          
          
            
    
          <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
  spacing={5}
  style={{ paddingLeft: 50, paddingTop: 30}}
>

 <Grid item xs={6}>
 
       
        <Card  
  style={{ marginLeft: 50,marginRight: 70, padding: 30}}
>
      <Grid  direction="row"
  justify="center"
  alignItems="center" container spacing={3} >
       
        <Grid item xs={4}  spacing={1} >
         <div className={classes.centerText} > <ContactsTwoToneIcon color="primary" style={{ fontSize: 60 }} /> Client info</div>
         </Grid>
        <Grid item xs={4} >
         <div className={classes.centerText}> <DynamicFeedTwoToneIcon color="primary" style={{ fontSize: 60 }} /> Projects</div>
       </Grid>
        <Grid item xs={4}>
         <div className={classes.centerText}> <DvrTwoToneIcon color="primary" style={{ fontSize: 60 }} /> Current Project</div>
        </Grid>
        <Grid item xs={4}>
         <div className={classes.centerText}> <StorageTwoToneIcon color="primary" style={{ fontSize: 60 }} /> Data Analytics</div>
         </Grid>
        <Grid item xs={4}>
         <div className={classes.centerText}> <BugReportTwoToneIcon color="primary" style={{ fontSize: 60 }} /> QA</div>
         </Grid>
        <Grid item xs={4}>
         <div className={classes.centerText}> <CloudTwoToneIcon color="primary" style={{ fontSize: 60 }} /> Weather</div>
       </Grid>
      </Grid>
    
	</Card>
 
</Grid>

        <Grid item xs={6} >
      
             <Card style={{ minWidth: 550  }}
   variant="outlined" className={classes.root}>
           
         <CardContent>
           <Typography variant="h7" component="h2">
      Detected Faults
        </Typography>
        <Typography color="textSecondary">
          Today
        </Typography>
           </CardContent>
           
            <LineChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 20, right: 50, left: 40, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="critical"
              stackId="a"
              stroke="#f44336"
            />
            <Line
              type="monotone"
              dataKey="healthy"
              stackId="a"
              stroke=" #4caf50"
            />
             <Line
              type="monotone"
              dataKey="int"
              stackId="a"
              stroke=" #1565C0"
            />
          </LineChart>
          	
         </Card>
            </Grid>
        <Grid item xs={6} >
        
            <Card style={{ marginLeft: 45, minWidth: 550 }}
   variant="outlined" className={classes.root}>
           
           <CardContent>
           <Typography variant="h7" component="h2">
         Asset Health
        </Typography>
        <Typography color="textSecondary">
          Multi-line Chart
        </Typography>
        <div style={{ display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: -50}}>
      
         <Typography variant="h5"  color="Secondary">
          10 <ArrowDropUpIcon style={{ marginLeft: -10}} />
   
        </Typography>
         <Typography style={{ fontSize:12}} color="textSecondary">
        MENA Region
        </Typography>
        
        
      
        
         
       
        </div>
           </CardContent>
        <BarChart
            width={450}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 0,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="1 1 " />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar barSize={25} dataKey="critical" stackId="a" fill="#f44336" />
            <Bar dataKey="healthy" stackId="a" fill=" #4caf50" />
            <Bar dataKey="int" stackId="a" fill=" #1565C0" />
          </BarChart>
          
          </Card>
       </Grid>
      
        <Grid item xs={6} >
     
            <Card style={{ marginLeft: 45}}
   variant="outlined" className={classes.root}>
           
         <CardContent>
           <Typography variant="h7" component="h2">
       Faults Trends
        </Typography>
        <Typography color="textSecondary">
          Today
        </Typography>
           </CardContent>
           
            <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BuildTwoToneIcon color="secondary" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="FID: 20392_VID_07" secondary="T&D Lines Mohindengarg" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
              <BuildTwoToneIcon color="secondary" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="FID: 20392_VID_06" secondary="Rusting of frames" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
               <BuildTwoToneIcon color="secondary" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="FID: 20392_VID_05" secondary="Loose Connectors" />
      </ListItem>
    </List>
    
        </Card>   


          </Grid>
       
      </Grid>

                       
      
      </Scrollbar>
    </Page>
    
    </>
  )
}
export default HomePage
