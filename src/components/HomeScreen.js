import React,{useState} from "react";
import data from "./data";
import {Container,Row,Col,Card} from "react-bootstrap"
import airpod from "../Images/airpod.jpeg"; 
import {Link}from "react-router-dom"; 



const HomeScreen =(props) =>{
const [products,setProducts]=useState(data)
console.log(products);    
return(
        <div>
            <Container>
                <Row>
                    {products.map((prod)=>(
                        <Col sm={12} md={6}lg={4}xl={3}>
                            <Card className="my-3 p-3 rounded" >
                                <Link to={`/products/${prod._id}`}>
                                <Card.Img src={prod.image} varient="top"style={{height:'300px'}}/>
                                </Link>
                            </Card> 
                            <Card.Body>
                                <Card.Title as="div">
                                    <strong>{prod.name}</strong>
                                </Card.Title>
                                <Card.Text as="div">
                                    <p>Rating:{prod.rating}</p>
                                    Avg Rating :{prod.numReviews}

                                </Card.Text>
                                <Card.Text as="h3" className="pt-2">
                                    {prod.price}
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    ))}

                </Row>

            </Container>

        </div>
    )
}

export default HomeScreen