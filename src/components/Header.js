import React from "react"
import {Navbar,Nav} from "react-bootstrap"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import { FaUser ,FaShoppingCart} from 'react-icons/fa';


const Header =()=>{
    return(
        <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">PICKUP FREASH</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="#home"><i> <FaShoppingCart/></i> Cart</Nav.Link>
                        <Nav.Link href="#features"> <i><FaUser/> </i>login</Nav.Link>
            
                    </Nav>
                </Navbar>


        </>


    )
}
export default Header