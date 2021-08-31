import React from "react"
import { Container, Row, Col } from "react-bootstrap";


const Footer =() =>{
    return(
        <div> 
            <Container bg="dark" variant="dark">
                <Row >
                    <Col className="text-center ">
                     <p>copy right &#169; Irayya</p> 
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer