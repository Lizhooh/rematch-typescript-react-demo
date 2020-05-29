import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import storage from '../storage';

type LoadStatus = 'init' | 'load' | 'done';

// 判断本地的 token 是否存在，存在则状态去加载页，
// 再检查 token 的有效性，有效则转到目标页，否则转跳到登录页
export default function useAuth(checkToken, ready) {
    const { replace } = useHistory();
    const [token, setToken] = useState(() => storage.get('TOKEN'));
    const [loadStatus, setLoadStatus] = useState<LoadStatus>('init');

    useEffect(() => {
        if (loadStatus === 'done') {
            console.log('可以加载 api 了');
            ready(token);
        }
    }, [loadStatus]);

    // 判断本地的 token 是否存在，存在则状态去加载页
    if (token && loadStatus === 'init') {
        setLoadStatus('load');
        // 检查 token 有效性
        checkToken().then(res => {
            if (res) {
                // 成功
                storage.set('TOKEN', res);
                setLoadStatus('done');
                setToken(res);
                return;
            }
            // 失败，回去吧
            replace('/');
        });
    }

    return loadStatus;
};
