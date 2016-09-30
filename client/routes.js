import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NotFound from './components/NotFound';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import Dashboard from './components/Dashboard';
import NewProject from './components/NewProject';
import MyProjects from './components/MyProjects';
import Landing from './components/Landing';
import Login from './components/Login';
import Team from './components/team/Team';
import SingleGlobe from './components/SingleGlobe';
import EditGlobe from './components/EditGlobe';

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth,
  predicate: auth => auth.isAuthenticated,
  redirectAction: history.push,
  failureRedirectPath: '/login',
  wrapperDisplayName: 'UserIsAuthenticated'
});


export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/team" component={Team} />
      <Route path="/dashboard" component={UserIsAuthenticated(Dashboard)} />
      <Route path="/newProject" component={UserIsAuthenticated(NewProject)} />
      <Route path="/myProjects" component={UserIsAuthenticated(MyProjects)} />
      <Route path="/globe/:id" component={UserIsAuthenticated(SingleGlobe)} />
      <Route path="/globeEdit/:id" component={UserIsAuthenticated(EditGlobe)} />
      <Route path="*" component={NotFound} />
    </Route>
  </Route>
);
