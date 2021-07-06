import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Layout from './components/Layout';
import Tags from './views/Tags';
import Money from './views/Money';
import Statistics from './views/Statistics';
import NoMatch from './views/NoMatch';
import {Tag} from './components/Tag';


function App() {
  return (
      <Router>
          <Layout>
              <Switch>
                  <Route exact path="/tags/:tag">
                      <Tag />
                  </Route>
                  <Route exact  path="/tags">
                      <Tags />
                  </Route>
                  <Route exact path="/money">
                      <Money />
                  </Route>
                  <Route exact path="/statistics">
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
