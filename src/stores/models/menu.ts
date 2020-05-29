
const state = {
    list: [
        { id: 1, path: '/index', title: '主页', key: 'Index' },
        { id: 2, path: '/user1', title: '用户页', key: 'User' },
        {
            id: 3, path: '/user2', title: '用户页2',
            key: 'User22',
            children: [
                { id: 4, path: '/test11', title: '测试一', key: 'Text1' },
                { id: 5, path: '/test22', title: '测试二', key: 'Text2' },
                { id: 6, path: '/test33', title: '测试三', key: 'Text3' },
            ],
        },
        { id: 7, path: '/user3', title: '用户页3', key: 'User1' },
        {
            id: 8, path: '/about', title: '关于页',
            key: 'About11',
            children: [
                { id: 9, path: '/test1', title: '测试一', key: 'Text1' },
                { id: 10, path: '/test2', title: '测试二', key: 'Text2' },
                { id: 11, path: '/test3', title: '测试三', key: 'Text3' },
            ],
        },
    ],
};

export default {
    state,
    reducers: {

    },
    effects: {

    },
};
