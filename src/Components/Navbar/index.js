import React from 'react'
import {Bars, Nav, NavIcon, NavLink} from './indexElement'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
               <NavLink to ="/">Burger</NavLink> 
               <NavIcon onClick={toggle}>
                 <p>Menu</p>
                 <Bars/>  
               </NavIcon>    
            </Nav> 
        </>
    );
}

export default Navbar
