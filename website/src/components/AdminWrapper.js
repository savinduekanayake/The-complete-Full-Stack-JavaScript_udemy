import React, {Component} from 'react';
import './assets/css/admin.css'



//material UI
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';


import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


// Drawer imports
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import MenueIcon from '@material-ui/core/MenuItem';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';

//pages
import Sidebar from './Common/SideBar';


const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex'
    },
    toolbar: {
        paddingRight: 24
    },
    appBar:{
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width','margin'],{
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width:`calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width','margin'],{
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        }),
    },
    appBarSpace: theme.mixins.toolbar,
    drawerPaper: {
        position: 'relative',
        whiteSpace : 'noWrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerPaperClose: {
        overFlowX: 'hidden',
        width: theme.spacing.unit * 7,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    toolbarIcon: {
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'flex-end',
        padding:'0 8px',
        ...theme.mixins.toolbar
    },
    content: {
        flexFrow: 1,
        padding: theme.spacing.unit * 3,
        height: '100vh',
        overFlow: 'auto'
    }
    
});


class AdminWrapper extends Component{

    constructor(props){
        super(props);

        this.state = {
            open: true
        }
    }

    handleDrawerOpen = (e) => {
        this.setState({open:true});
    }

    handleDrawerClose = (e) => {
        this.setState({open:false});
    }


    render(){
        const {classes} = this.props;
        return(
            <div id="admin-page" className={classes.root}>

                <AppBar className={classNames(classes.appBar, this.state.open && classes.appBarShift )}>
                    <ToolBar className={classes.toolbar}>
                        <IconButton onClick={this.handleDrawerOpen}>
                            <MenueIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            >Admin
                        </Typography>
                    </ToolBar>
                </AppBar>
                <Drawer
                    classes={{
                        paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose) 
                    }}
                    variant="permanent"
                    open={true}
                    >
                    <div className={classes.toolbarIcon}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>

                    <Divider />

                    <Sidebar />
                </Drawer>


                <main className={classes.content}>
                    <div className={classes.appBarSpace} />
                    {this.props.children}
                </main>
                
            </div>
        )
    }
}

export default withStyles(styles)(AdminWrapper);