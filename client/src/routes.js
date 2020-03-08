import React from 'react';
import { Route,Switch} from 'react-router-dom';

import UserView from './components/userview';
import User from './components/userview';
import TableView from './components/tableview';
import NotFound from './components/404';

export default () => (
    <Switch>
        <Route exact path ="/" component={UserView}/>
        <Route exact path ="/userview" user={false} component={UserView}/>
        <Route path ="/userview/:id" user={true} component={UserView}/>
        <Route exact path ="/tableview" component={TableView}/>
        <Route exact component={NotFound}/>
    </Switch>
);