import React from 'react';
import SideBar from '../SideBar'
import UserHeader from '../UserHeader'
import MobileNav from '../MobileNav'

import {StyledContent} from './styles'

const Layout=({user,children})=>{
return (
    <div>
        <MobileNav/>
        <SideBar/>
        <StyledContent>
            <UserHeader user={user}/>
            <div>{children}</div>
        </StyledContent>

    </div>
);
};

export default Layout;