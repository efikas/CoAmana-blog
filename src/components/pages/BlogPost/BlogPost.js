import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container,  CardImg, CardText, CardBody, } from 'reactstrap';
import classes from './../../layouts/Template.module.scss';

class BlogPost extends Component {
  constructor(props) {
    super(props);

    this.state = { };
  }

  componentDidMount(){}

  render() {
    const post = this.props.location.state.post;

    return (
      <div className="app flex-row align-items-center">
         <header className={classes.sheader}>
          <h1 className="text-center pt-5">{post.title.rendered}</h1>
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

const mapStateToProps = (state) => {
  return {
      posts: state.posts,
      EOC:state.EOC,
      isLoading: state.isLoading
  }
}



export default connect(mapStateToProps, null)(BlogList);