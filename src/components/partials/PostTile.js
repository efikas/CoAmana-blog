import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';

const  PostTile = ({post}) => {
    
    const {featured_image, title, excerpt, slug} = post
    
    return (
        <Col md="6" className="mb-4">
            <Card>
                <NavLink to={{pathname: "/post/" + slug, state: { post: post }}} >
                    <CardImg top width="100%" src={featured_image} alt="Card image cap" />
                </NavLink>
               
                <CardBody>
                    <CardTitle><h4>{title.rendered}</h4></CardTitle>
                    <CardText dangerouslySetInnerHTML={{__html: excerpt.rendered}}></CardText>
                    
                    <NavLink to={{pathname: "/post/" + slug, state: { post: post }}} >
                        <Button outline color="primary">View Post</Button>
                    </NavLink>
                </CardBody>
            </Card>
        </Col>
    );
}

export default PostTile;
