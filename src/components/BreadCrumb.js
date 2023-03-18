import React from 'react';
import{ Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const BreadCrumb = (props) => {
    const{ title }= props;
  return (
    <div className='breadcrumb mb-0 py-4'>
    <Container fluid="lg">
        <Row>
            <Col >
                <p className='text-center'>
                <Link to='/' className='text-dark'>Home </Link>
                /{title}
                </p>
            </Col>
        </Row>
    </Container>
      
    </div>
  )
}

export default BreadCrumb;

