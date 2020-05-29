
const state = {
    list: [
        { id: 1, path: '/admin', title: '主页', key: 'Index' },
        { id: 2, path: '/admin/user1', title: '用户页', key: 'User' },
        {
            id: 3, path: '/admin/user2', title: '用户页2',
            key: 'User22',
            children: [
                { id: 4, path: '/admin/test11', title: '测试一', key: 'Text1' },
                { id: 5, path: '/admin/test22', title: '测试二', key: 'Text2' },
                { id: 6, path: '/admin/test33', title: '测试三', key: 'Text3' },
            ],
        },
        { id: 7, path: '/admin/user3', title: '用户页3', key: 'User1' },
        {
            id: 8, path: '/admin/about', title: '关于页',
            key: 'About11',
            children: [
                { id: 9, path: '/admin/test1', title: '测试一', key: 'Text1' },
                { id: 10, path: '/admin/test2', title: '测试二', key: 'Text2' },
                { id: 11, path: '/admin/test3', title: '测试三', key: 'Text3' },
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
