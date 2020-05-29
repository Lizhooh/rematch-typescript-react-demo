import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigate from '../containers/Navigate';
import Menu from '../containers/Menu';
import NotFound from './NotFound';
import Loading from './Loading';
import useNprogress from '../hooks/useNprogress';
import useRoutes from '../hooks/useRoutes';
import useAuth from '../hooks/useAuth';

const checkToken = async () => {
    await new Promise(rs => setTimeout(rs, 1000));
    return Math.random() > 0.5 ? Math.random().toString(2).slice(2) : '';
};

// 管理页整体布局
export default () => {
    useNprogress(200);
    const routes = useRoutes();
    const loadStatus = useAuth(checkToken, token => {
        console.log('哈哈：', token);
    });

    const Text = ({ title }) => (
        <h2>{title}</h2>
    );

    if (loadStatus !== 'done') {
        return <Loading />;
    }
    return (
        <div className='admin'>
            <Navigate />
            <Menu />
            <Switch>
                {routes.map(({ key, val }) => (
                    <Route
                        exact={true}
                        key={key}
                        path={val.path}
                        render={() => (
                            <div className='main'>
                                <Text title={val.title} />
                            </div>
                        )}
                    />
                ))}
                <div className='main'>
                    <Route path='/*' component={NotFound} />
                </div>
            </Switch>
        </div>
    );
}
