import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    NavigationMenu,
    NavigationLink,
    NavigationRoute,
    NavigationBtnWrap
} from './NavgEle'

const Navigation = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}><CloseIcon/></Icon>
            <NavigationMenu>
                <NavigationLink to="/">Burgers</NavigationLink>
                <NavigationLink to="/">Desserts</NavigationLink>
                <NavigationLink to="/">Birayani</NavigationLink>
                <NavigationLink to="/">Full Menu</NavigationLink>
            </NavigationMenu>
            <NavigationBtnWrap>
                <NavigationRoute>Order Now</NavigationRoute>
            </NavigationBtnWrap>
        </SidebarContainer>
    )
}

export default Navigation
