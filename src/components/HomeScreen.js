import React,{useState} from "react";
import data from "./data";
import {Container,Row,Col} from "react-bootstrap"


const HomeScreen =(props) =>{
const [products,setProducts]=useState(data)
console.log(products);    
return(
        <div>
            <Container>
                <Row>
                    {products.map((prod)=>(
                        <Col sm={12} md={6}lg={4}xl={3}>
                            <Card classN 
                        </Col>
                    )}

                </Row>

            </Container>

        </div>
    )
}

export default HomeScreen