import { useSelector } from 'react-redux';

export default function useRoutes() {
    // 将多维度数据转为扁平化数据
    const routes = useSelector<any, any>(state => {
        const list = state.menu.list as any[];
        const obj = list.reduce((obj, i) => {
            if (i.children) return {
                ...obj, ...i.children.reduce((o, j) => ({
                    ...o, [j.id]: j
                }), {}),
            };
            return { ...obj, [i.id]: i };
        }, {});
        return Object.keys(obj).map(key => ({
            key: key, val: obj[key]
        }));
    }, () => true);

    return routes;
}