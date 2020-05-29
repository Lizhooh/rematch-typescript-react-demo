import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State, Dispatch } from '../stores';

// 整体布局
export default () => {
    const count = useSelector((state: State) => state.index.count);
    const action = useDispatch<Dispatch>().index;
    const inc = () => action.inc(1);
    const incAsync = () => action.incAsync(8);

    return (
        <div className='app'>
            <div className='title'>{count}</div>

            <div><button onClick={inc}>Add</button></div>
            <div><button onClick={incAsync}>AddAsync</button></div>
        </div>
    );
}
