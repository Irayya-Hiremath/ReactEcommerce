import React, { useState,useEffect } from "react";
import data from "./data";
import {Container} from "react-bootstrap";
import {Link} from 'react-router-dom';

const Product=(props) =>{
        const[product,setProduct]=useState({});
        useEffect(()=>{
            const newData=data.find((d)=>d._id=props.match.params.id)
    
            
        },[]);
    return(
        <div> 
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

                  </Col>
              </Row>
          </Container>
        </div>
    )
}

export default Product;