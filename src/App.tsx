import React from 'react';
import { Switch, Route } from 'react-router-dom';
import useNprogress from './hooks/useNprogress';

import Index from './pages/Index';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';

// 整体布局
export default () => {
    useNprogress(200);
    return (
        <Switch>
            <Route path='/' exact={true} component={Index} />
            <Route path='/admin' component={Admin} />
            <Route path='*' component={NotFound} />
        </Switch>
    );
}
