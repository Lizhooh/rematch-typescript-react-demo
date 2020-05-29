import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Avatar, Popover } from 'antd';

import { State } from '../stores';

export default function Navigate() {
    const { title, user, links, operates } = useSelector((state: State) => state.navigate);
    const UserMenu = (
        <div style={{ width: 150 }}>
            {operates.map(item => (
                <div className='navigate-operate' key={item.id}>
                    <Avatar src={item.icon} size={16} />
                    <span>{item.title}</span>
                </div>
            ))}
        </div>
    );
    const Operate = (
        <Popover content={UserMenu} align={{ offset: [20, 0] }}>
            <div className='navigate-user'>
                <Avatar src={user.avatar} size={48} />
                <span className='navigate-user-name'>{user.name}</span>
            </div>
        </Popover>
    );

    return (
        <div className='navigate'>
            <div className='navigate-left'>
                <span className='navigate-title'>{title}</span>
            </div>
            <div className='navigate-right'>
                <div className='navigate-link' style={{ width: links.length * 105 }}>
                    {links.map(item => (
                        <Link to={item.path} key={item.id}>
                            {item.title}
                        </Link>
                    ))}
                </div>
                {Operate}
            </div>
        </div>
    );
}