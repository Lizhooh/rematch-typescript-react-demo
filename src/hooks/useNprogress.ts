import { useEffect } from 'react';
import nprogress from 'nprogress';
import { useLocation } from 'react-router-dom';

let timer: any = 0;
export default function useNprogress(time = 200) {
    const { pathname } = useLocation();
    useEffect(() => {
        nprogress.start();
        clearTimeout(timer);
        timer = setTimeout(() => {
            nprogress.done();
        }, time);
    }, [pathname]);
}
