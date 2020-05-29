
import UserIcon from '../../assets/icons/user.svg';
import LogoutIcon from '../../assets/icons/logout.svg';

// ts 自动推导
const state = {
    title: 'TITLE',
    links: [
        { id: 1, path: '/', title: '主页', key: 'Index' },
        { id: 2, path: '/feedback', title: '反馈', key: 'Feedback' },
        { id: 3, path: '/help', title: '帮助', key: 'Help' },
    ],
    user: {
        name: '小明',
        avatar: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1368451564,780267377&fm=111&gp=0.jpg',
    },
    operates: [
        { id: 1, title: '我的资料', icon: UserIcon },
        { id: 2, title: '退出登录', icon: LogoutIcon },
    ]
};

export default {
    state,
    reducers: {
    },
    effects: {
    },
};
