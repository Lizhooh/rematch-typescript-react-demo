import { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import storage from '../storage';

const whitelist = ['/404', '/loading', '/'];

// 判断本地的 token 是否存在，存在则状态去加载页，
// 再检查 token 的有效性，有效则转到目标页，否则转跳到登录页
export default function useAuth() {
    const { pathname } = useLocation();
    const { replace } = useHistory();

    useEffect(() => {
        if (whitelist.includes(pathname)) return;
        const token = storage.get('TOKEN');
        console.log(pathname);
        console.log(token);
        if (token) replace('/loading');
        // (async () => {
        //     if (token) {
        //         replace('/loading');
        //         storage.set('TARGET', window.location.href);
        //         await new Promise(rs => setTimeout(rs, 1000));
        //         const url = storage.get('TARGET');
        //         if (url) {
        //             replace(url);
        //         }
        //         return;
        //     }
        //     replace('/');
        // })();
    }, [pathname]);
};
