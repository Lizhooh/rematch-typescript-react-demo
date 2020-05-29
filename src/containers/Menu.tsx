import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { State } from '../stores';
import { Menu } from 'antd';

let flag = false;
let selectedKeys: any = '';
let openKeys: any = '';

export default function MyMenu() {
    const { list } = useSelector((state: State) => state.menu);
    const { pathname } = useLocation();
    const { SubMenu, Item } = Menu;

    // 找出激活的 ID 和父级 ID
    (() => {
        const is = item => item.path === pathname;
        if (flag) return;
        flag = true;
        list.forEach(item => {
            if (is(item)) {
                selectedKeys = item.id;
                openKeys = item.id;
            }
            if (!item.children) return;
            const arr = (item as any).children;
            arr.forEach(i => {
                if (is(i)) {
                    selectedKeys = i.id;
                    openKeys = item.id;
                }
            });
        });
    })();

    return (
        <div className='menu'>
            <Menu
                onClick={e => console.log(e)}
                style={{ width: 220, height: 'calc(100vh - 55px)' }}
                defaultSelectedKeys={[selectedKeys + '']}
                defaultOpenKeys={[openKeys + '']}
                theme='light'
                mode='inline'>
                {list.map(item => (
                    !item.children ?
                        <Item key={item.id}>
                            <Link to={item.path}>{item.title}</Link>
                        </Item> :
                        <SubMenu
                            key={item.id}
                            title={item.title}>
                            {item.children && item.children.map(i => (
                                <Item key={i.id}>
                                    <Link to={i.path}>{i.title}</Link>
                                </Item>
                            ))}
                        </SubMenu>
                ))}
            </Menu>
        </div>
    );
}