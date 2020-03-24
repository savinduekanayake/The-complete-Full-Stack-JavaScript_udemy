import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//pages
import PageWrapper from './components/PageWrapper';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

import AdminWrapper from'./components/AdminWrapper';
import Login from './components/pages/Login';

function App() {
  return (
    <Router>

      <Route
        path="/admin"
        render={props=>(
          <AdminWrapper>
            <Login />
          </AdminWrapper>
        )}
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

export default App;
