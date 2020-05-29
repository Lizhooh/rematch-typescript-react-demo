import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import Navigate from '../containers/Navigate';
import Menu from '../containers/Menu';
import NotFound from './NotFound';
import Loading from './Loading';
import useNprogress from '../hooks/useNprogress';
import useRoutes from '../hooks/useRoutes';
import storage from '../storage';

const maps = {};
type LoadStatus = 'init' | 'load' | 'done';

const checkToken = async () => {
    await new Promise(rs => setTimeout(rs, 1000));
    return Math.random() > 0.5 ? 'abcdef' : '';
};

// 整体布局
export default () => {
    useNprogress(200);
    const routes = useRoutes();
    const { replace } = useHistory();
    const [token] = useState(() => storage.get('TOKEN'));
    const [loadStatus, setLoadStatus] = useState<LoadStatus>('init');

    if (loadStatus === 'load') return <Loading />;
    // 判断本地的 token 是否存在，存在则状态去加载页
    if (token && loadStatus === 'init') {
        setLoadStatus('load');
        // 检查 token 有效性
        checkToken().then(res => {
            if (res) {
                // 成功
                storage.set('TOKEN', res);
                setLoadStatus('done');
                return;
            }
            // 失败，回去吧
            replace('/');
        });
        return <Loading />;
    }

    const Text = ({ title }) => {
        return (
            <h2>{title}</h2>
        );
    };

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
