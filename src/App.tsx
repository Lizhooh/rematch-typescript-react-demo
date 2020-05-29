import React, { useMemo } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navigate from './containers/Navigate';
import Menu from './containers/Menu';

const Text = ({ title }) => {
    return (
        <h2>{title}</h2>
    );
}

const maps = {};

// 整体布局
export default () => {

    // 将多维度数据转为扁平化数据
    const routes = useSelector<any, any>(state => {
        const list = state.menu.list as any[];
        const obj = list.reduce((obj, i) => {
            if (i.children) return {
                ...obj, ...i.children.reduce((o, j) => ({
                    ...o,
                    [j.id]: j,
                }), {}),
            };
            return { ...obj, [i.id]: i };
        }, {});
        return Object.keys(obj).map(key => ({
            key: key,
            val: obj[key],
        }));
    }, () => true);

    console.log(routes);

    return (
        <div className='app'>
            <Navigate />
            <Menu />
            <Switch>
                {routes.map(({ key, val }) => (
                    <Route
                        key={key}
                        path={val.path}
                        render={() => (
                            <div className='main'>
                                <Text title={val.title} />
                            </div>
                        )}
                    />
                ))}
            </Switch>
        </div>
    );
}
