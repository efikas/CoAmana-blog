import React, { Component } from 'react';
import { Col, Container,  Row, Card, CardImg, CardText, CardBody, CardTitle, } from 'reactstrap';
import classes from './../../layouts/Template.module.scss';

class BlogPost extends Component {
  constructor(props) {
    super(props);

    this.state = { };
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    
    console.log(this.props);
  }
  render() {
    const post = this.props.location.state.post;

    return (
      <div className="app flex-row align-items-center">
         <header className={classes.sheader}>
          <h1 className="text-center pt-5" st>{post.title.rendered}</h1>
        </header>
        <Container>
          <div className="mb-4">
              <CardImg top width="100%" src={post.featured_image} alt={post.title.rendered} />
               
              <CardBody>
                  <CardText dangerouslySetInnerHTML={{__html: post.content.rendered}}></CardText>
              </CardBody>
          </div>
         
        </Container>
      </div>
    );
  }
}

export default BlogPost;
