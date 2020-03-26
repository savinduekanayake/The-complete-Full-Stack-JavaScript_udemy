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
import Dashboard from './components/pages/Dashboard';

class App extends Component {
  render(){
    return (
      <Router>

        <Route
          path="/admin"
          render={props=>{
            return (
              <AdminWrapper>
               
                {this.props.auth.token ?
                  <Dashboard />
                : 
                  <Login />
                }
              </AdminWrapper>
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
