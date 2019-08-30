import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'reactstrap';


import classes from './../../layouts/Template.module.scss';
import logo from '../../../assets/logo.svg';

import PostTile from '../../partials/PostTile';
import NavButton from '../../partials/NavButton';
import Loading from '../../partials/Loading';
import ReloadPage from '../../partials/ReloadPage';
import { fetchPosts } from '../../store/actions';

class BlogList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      page: +this.props.match.params.slug || 1,
      perPage: 6,
     };
    // this.nextPage = this.nextPage.bind(this);
    // this.prevPage = this.prevPage.bind(this);
  }

  componentDidMount(){
    
    this.props.fetchPosts(this.state.page);
  }


nextPage = () => {
  this.props.history.push("/posts/page/"+ (this.state.page  + 1));
  this.setState(prevState => ({  
      page: prevState.page + 1
  }));

  this.props.fetchPosts(this.state.page + 1);
}

prevPage = async () => {
  this.props.history.push("/posts/page/"+ (this.state.page - 1));
  
  this.setState(prevState => ({  
      page: prevState.page - 1
  }));

  
  this.props.fetchPosts(this.state.page - 1);
}

normalizePosts() {
  return this.props.posts.map(post => <PostTile key={post.id} post={post} />);
}

checkForEOC = () => {
  // if the length of post returned from API is less that the number of post per page
  // OR
  // the API return a 400 status message
  // End of Content is true
  if(this.props.posts && this.props.posts.length < this.state.perPage || this.props.EOC) {
    return true;
  }

  return false;
}

  render() {
    
    return (
      <div className="app flex-row align-items-center">
         <header className={classes.sheader}>
            <a href="/">
              <img
                src={logo}
                className={classes.headerImage}
                alt="COAMANA"
              />
            </a>COAMANA
          </header>
        <div className="p-5">
          <div className="text-center mb-5 mt-2"><h1> Recent Post</h1></div>
          <Row className="justify-content-right">
            {
              (this.props.isLoading && <Loading />)
            }
            {
              (!this.props.isLoading && this.props.posts == null && <ReloadPage reload={this.getDataFetch} />)
            }
            {
              (!this.props.isLoading && this.props.posts != null && this.props.posts.length > 0 && this.normalizePosts())
            }
          </Row>




          <div className="text-center mt-4 mb-4">
              <NavButton page={this.state.page} 
              nextPage={this.nextPage} 
              prevPage={this.prevPage} 
              EOC={this.checkForEOC()} />
          </div>
        </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
      fetchPosts: (pageNUm) => dispatch(fetchPosts(pageNUm))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BlogList);
