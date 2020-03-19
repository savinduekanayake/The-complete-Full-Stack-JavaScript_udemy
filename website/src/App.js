import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//pages
import PageWrapper from './components/PageWrapper';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <PageWrapper >

        <Route // or switch
        exact = {true}
          path="/"
          component={Home}
        />

      <Route 
        path = '/about'
        component={About}
        />

      <Route 
        path = '/contact'
        component={Contact}
        />



      </PageWrapper>
    </Router>
  );
}

export default App;
