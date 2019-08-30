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

  normalizePost = () => {

    //if posts is empty return to homepage
    if(this.props.posts.length < 1) {
      this.props.history.push("/");
      return;
    }

    let post = this.props.posts.filter(pos => pos.slug == this.props.match.params.slug);

    //if post is not in posts return to homepage
    if (post.length < 1) {
      this.props.history.push("/");
      return;
    }
    return post[0];
  }

  render() {
    const post = this.normalizePost();

    return (
      <div>
          {
            post && 
            
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
          }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      posts: state.posts,
  }
}

export default connect(mapStateToProps, null)(BlogPost);