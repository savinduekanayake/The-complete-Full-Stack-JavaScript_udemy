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

class AdminWrapper extends Component{
    render(){
        return(
            <div id="admin-page">

                <AppBar>
                    <ToolBar>
                        <IconButton>
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
                    variant="permanent"
                    open={true}
                >
                    <List>
                        <ListItem>Dashboad</ListItem>
                    </List>
                </Drawer>

                {this.props.children}
            </div>
        )
    }
}

export default AdminWrapper;