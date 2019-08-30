import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import logo from '../../assets/logo.svg';

const loading = () => <div className="animated fadeIn pt-3 text-center" style={{
          height: 500,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <img src={logo} alt="logo" style={{height: 50, weight: 50 }} />
        </div>;

const BlogList = Loadable({  loader: () => import('../pages/BlogList'), loading});

const BlogPost = Loadable({ loader: () => import('../pages/BlogPost'), loading});

class Template extends Component {

  render() {
    return (
        <div className={"mo-container"}>
          <BrowserRouter>
              <Switch>
                <Route exact path="/" name="Home" component={BlogList} />
                <Route exact path="/posts/page/:slug" name="Home" component={BlogList} />
                <Route exact path="/post/:slug" name="Blog Post" component={BlogPost} />
                {/* <Route exact path="/404" name="Page 404" component={Page404} /> */}
              </Switch>
          </BrowserRouter>
          <footer className="mo-footer" style={{ backgroundColor: '#17a2b8', color: 'white', paddingTop: '20px' }}>
            <div className="text-center">
              {' '}
              Copyright &copy; 2019 CoAmana
            </div>
            <br />
           
          </footer>
        </div>
    );
  }
}

export default Template;
