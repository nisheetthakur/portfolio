import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {SideNavItems, SideNavLink} from 'carbon-components-react/lib/components/UIShell';
import {StyledSideNav} from './styles';

const items=[
{name: 'Me',path:'/portfolio'},
{name: 'Projects',path:'/portfolio/projects'},
{name: 'Work',path:'/portfolio/work'},
{name: 'Education',path:'/portfolio/education'}
];

const SideBar=()=>{
    const location=useLocation();
    return (
    <StyledSideNav isFixedNav expanded isChildOfHeader={false} aria-label="Side navigation">
        <SideNavItems>
        {items.map(i=>(
            <SideNavLink
            isActive={
                location.pathname==='/portfolio/' && i.path==='/portfolio'?true:location.pathname===i.path
            }
            element={Link}
            to={i.path}
            key={i.name}
            >
                {i.name}</SideNavLink>
        ))}

        </SideNavItems>

    </StyledSideNav>);
}

export default SideBar;