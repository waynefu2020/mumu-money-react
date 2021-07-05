import React from 'react';
import './App.css';
import styled from 'styled-components';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Nav from './components/Nav';
import Layout from './components/Layout';
import Tags from './views/Tags';
import Money from './views/Money';
import Statistics from './views/Statistics';
import NoMatch from './views/NoMatch';


function App() {
  return (
      <Router>
          <Layout>
              <Switch>
                  <Route path="/tags">
                      <Tags />
                  </Route>
                  <Route path="/money">
                      <Money />
                  </Route>
                  <Route path="/statistics">
                      <Statistics />
                  </Route>
                  <Redirect exact from="/" to="/money"/>
                  <Route path="*">
                      <NoMatch />
                  </Route>
              </Switch>
          </Layout>
      </Router>
  );
}


export default App;
