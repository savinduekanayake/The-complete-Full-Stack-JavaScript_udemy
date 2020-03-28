import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';


//pages
import PageWrapper from './components/PageWrapper';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

import AdminWrapper from'./components/AdminWrapper';
import Login from './components/pages/Login';

// Admin pages
import Dashboard from './components/pages/Admin/Dashboard';
import Users from './components/pages/Admin/Users';
import Posts from './components/pages/Admin/Posts';
import AddPost from './components/pages/Admin/AddPost';

import LoginWrapper from './components/LoginWrapper';
class App extends Component {
  render(){
    return (
      <Router>

        <Route
          path='/admin/users'
          render={props=>{
            return (
              <div>
                {this.props.auth.token ?
                <AdminWrapper>
                  <Users />
                </AdminWrapper>
                 : 
                <LoginWrapper>
                  <Login />
                </LoginWrapper> 
                }
              </div>
            )
          }}
        />

        <Route 
          path='/admin/posts/add'
          render={props => {
            return (
              <div>

                {this.props.auth.token ?
                <AdminWrapper>
                  <AddPost />
                </AdminWrapper>
                : 
                <LoginWrapper>
                  <Login />
                </LoginWrapper>
                }
              </div>
            )
          }}
          />


        <Route
          path='/admin/posts'
          render={props=>{
            return (
              <div>
                {this.props.auth.token ?
                <AdminWrapper>
                  <Posts />
                </AdminWrapper>
                : 
                <LoginWrapper>
                  <Login />
                </LoginWrapper>
                }
              </div>
            )
          }}
        />

        <Route
        exact={true}
          path="/admin"
          render={props=>{
            return (
              <div>
                {this.props.auth.token ?
                <AdminWrapper>
                  <Dashboard />
                </AdminWrapper>
                : 
                <LoginWrapper>
                  <Login />
                </LoginWrapper>
                }
              </div>
              )
          }}
        />


          <Route // or switch
          exact = {true}
            path="/"
            render={props=>(
              <PageWrapper>
                <Home {...props} />
              </PageWrapper>
            )}
          />

        <Route 
          path = '/about'
          render={props=>(
            <PageWrapper>
              <About {...props} />
            </PageWrapper>
          )}
          />

        <Route 
          path = '/contact'
          render={props=>(
            <PageWrapper>
              <Contact {...props} />
            </PageWrapper>
          )}
          />


      </Router>
    );
  }
}

const mapStateToProps = state =>{
  return {
    auth: state.auth 
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
