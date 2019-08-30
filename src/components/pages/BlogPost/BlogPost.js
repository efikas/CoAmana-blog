import React, { Component } from 'react';
import { Col, Container,  Row, Card, CardImg, CardText, CardBody, CardTitle, } from 'reactstrap';

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
        <Container>
          <div className="text-center mt-4 mb-4"><h1>{post.title.rendered}</h1></div>
          <Card className="mb-4">
              <CardImg top width="100%" src={post.featured_image} alt={post.title.rendered} />
               
              <CardBody>
                  <CardText dangerouslySetInnerHTML={{__html: post.content.rendered}}></CardText>
              </CardBody>
          </Card>
         
        </Container>
      </div>
    );
  }
}

export default BlogPost;
