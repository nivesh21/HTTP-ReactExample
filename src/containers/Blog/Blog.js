import React, { Component } from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';

import './Blog.css';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
})
class Blog extends Component {
    
    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/posts" exact activeStyle={{textDecoration:'underline'}}>Home</NavLink></li>
                            <li>
                                <NavLink to={{
                                    pathname:'/new-post', 
                                    hash:'#submit',
                                    search:'?quick-submit=true'
                                    }}>New post
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* Outside switch Redirect only has to prop */}
                {/* Guards can be used as conditional rendering normally */}
                <Switch> 
                    <Route path="/new-post" component={AsyncNewPost}/>
                    <Route path="/posts"  component={Posts}/>
                    {/* <Redirect from="/" to="/posts" /> */}
                    {/* Catch all for unknown routes */}
                    <Route render={() => <h1>Route not found</h1>}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;