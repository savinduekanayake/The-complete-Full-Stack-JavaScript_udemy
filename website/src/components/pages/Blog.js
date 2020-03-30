import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Link as RouterLink} from 'react-router-dom';
import * as SiteActions from '../../store/actions/siteActions';


import Header from '../Common/Header';
import image from '../assets/img/about.jpg'
import BlogItem from '../Common/BlogItem';

class Blog extends Component {
    componentDidMount(){
        this.props.getPosts(0)
    }
    render(){
        
        return (
            <div>
                <Header
                title='Blog'
                subTitle="Read all our stories"
                showButton= {false}
                image = {image}
                />

            <section className="bg-light page-section" id="portfolio">
                <div className="container">
                    
                    <div className="row">
                        {this.props.site.posts ?
                            this.props.site.posts.length>0 ?
                                this.props.site.posts.map((post,index) => {
                                    return (
                                        <BlogItem
                                            post={post}
                                            key={index}
                                        />
                                    )
                                })
                        :null
                    : null}
                    </div>
                </div>
            </section>

                

        </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        site: state.site
    }
    
}

const mapDispatchToProps = dispatch => ({
    getPosts: (skip) => {
        dispatch(SiteActions.getPosts(skip));
    }
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Blog));