import React from "react"
import {Navbar,Nav} from "react-bootstrap"

const Header =()=>{
    return(
        <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">PICKUP FREASH</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="#home"><i class="fa fa-shopping-cart"></i> Cart</Nav.Link>
                        <Nav.Link href="#features"> <i class="fa fa-user"></i>login</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Navbar>


        </>


    )
}
export default Header