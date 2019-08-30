import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';

const  PostTile = ({post}) => {
    
    const {featured_image, title, excerpt, slug} = post
    
    return (
        <Col md="4" className="mb-4">
            <div className="card-1">
                <NavLink to={{pathname: "/post/" + slug, state: { post: post }}} >
                    <CardImg top width="100%" height={300} src={featured_image} alt="Card image cap" />
                </NavLink>
               
                <CardBody>
                    <CardTitle><h4>{title.rendered}</h4></CardTitle>
                    <CardText dangerouslySetInnerHTML={{__html: excerpt.rendered}}></CardText>
                    
                    <NavLink to={{pathname: "/post/" + slug, state: { post: post }}} >
                        <Button outline color="info">View Post</Button>
                    </NavLink>
                </CardBody>
            </div>
        </Col>
    );
}

export default PostTile;
