import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

import classes from './../../layouts/Template.module.scss';
import logo from '../../../assets/logo.svg';

import PostTile from '../../partials/PostTile';
import NavButton from '../../partials/NavButton';
import Loading from '../../partials/Loading';
import ReloadPage from '../../partials/ReloadPage';

class BlogList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      posts: [],
      baseUrl: "http://epower.ng/wp-json/wp/v2/posts?page=",
      page: +this.props.match.params.slug || 1,
      perPage: 6,
      EOC: false, //end of content
     };
    // this.nextPage = this.nextPage.bind(this);
    // this.prevPage = this.prevPage.bind(this);
  }

  componentDidMount(){

    console.log(this.props);
    
    this.getDataFetch(this.state.page);
  }

  async getDataFetch(pageNumber) {
    console.log(pageNumber) ;
    await fetch(this.state.baseUrl + pageNumber,
        { headers: {'Content-Type': 'application/json'}}
      ).then(r => r.json())
      .then(response => {
        if(response.hasOwnProperty("data") && response.data.status == 400){
          this.setState({
            posts: [],
            isLoading: false,
            EOC: true,
          });
        }
        else {
          this.setState({
            posts: response,
            isLoading: false,
            EOC: false,
          });
        }

        
      })
      .catch(error => {
        this.setState({
          posts: null,
          isLoading: false,
          EOC: false,
        })
        console.error(error);
      })
    // console.log(await response.json())
    
}

nextPage = () => {
  this.props.history.push("/posts/page/"+ (this.state.page  + 1));
  this.setState(prevState => ({  
      page: prevState.page + 1
  }));

  this.getDataFetch(this.state.page + 1);
}

prevPage = async () => {
  this.props.history.push("/posts/page/"+ (this.state.page - 1));
  
  this.setState(prevState => ({  
      page: prevState.page - 1
  }));

  
  this.getDataFetch(this.state.page - 1);
}

normalizePosts() {
  return this.state.posts.map(post => <PostTile key={post.id} post={post} />);
}

checkForEOC = () => {
  // if the length of post returned from API is less that the number of post per page
  // OR
  // the API return a 400 status message
  // End of Content is true
  if(this.state.posts.length < this.state.perPage || this.state.EOC) {
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
              (this.state.isLoading && <Loading />)
            }
            {
              (!this.state.isLoading && this.state.posts == null && <ReloadPage reload={this.getDataFetch} />)
            }
            {
              (!this.state.isLoading && this.state.posts != null && this.state.posts.length > 0 && this.normalizePosts())
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

export default BlogList;
