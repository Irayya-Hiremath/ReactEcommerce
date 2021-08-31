import React, { useState,useEffect } from "react";
import data from "./data";
import {Container,Row,Col,ListGroup,Item} from "react-bootstrap";
import {Link} from 'react-router-dom';

const Product=(props) =>{
        const[product,setProduct]=useState({});
        useEffect(()=>{
            const newData=data.find((d)=>d._id=props.match.params.id)
    
            
        },[]);
    return(
        <> 
          <Container>
              <Link className="btn btn-light my-3" to="/">
                  Go Back
              </Link>
              <Row>
                  <Col md={3}>
                      <ListGroup varients="flusj">
                          <ListGroup.Item>
                              <h3>{product.name}</h3>
                          </ListGroup.Item>
                      </ListGroup>
                      <ListGroup.Item>
                          <h3>Price{product.price}</h3>
                      </ListGroup.Item>
                      <ListGroup.Item>
                          <h3>Description{product.description}</h3>
                      </ListGroup.Item>

                  </Col>
              </Row>
          </Container>
        </>
    )
}

export default Product;