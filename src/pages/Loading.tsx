import React from 'react';
import { Spin, Icon } from 'antd';

const antIcon = <Icon type='loading' style={{ fontSize: 24 }} spin />;

export default function Loading() {
    return (
        <div className='loading-page'>
            <Spin indicator={antIcon} style={{ marginRight: 12 }} />
            <span style={{ color: '#789' }}>初次打开加载中 ...</span>
        </div>
    );
}