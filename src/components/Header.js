import React from "react"
import {Navbar,Nav,Container} from "react-bootstrap"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import { FaUser ,FaShoppingCart} from 'react-icons/fa';


const Header =()=>{
    return(
        <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">PICKUP FRESH</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="#home"><i> <FaShoppingCart/></i> Cart</Nav.Link>
                        <Nav.Link href="#features"> <i><FaUser/> </i>login</Nav.Link>
            
                    </Nav>
                    </Container>

                </Navbar>


        </>


    )
}
export default Header