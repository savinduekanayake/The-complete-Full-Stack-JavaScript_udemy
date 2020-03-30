import React,{Component} from 'react';
import API from '../../utils/api';
import {Link} from 'react-router-dom';

class BlogItem extends Component {
    render(){
        return (
            <div className="col-md-4 col-sm-6 portfolio-item">
                <Link className="portfolio-link"  to={`/blog/${this.props.post.slug}`}>
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                            <i className="fas fa-plus fa-3x"></i>
                        </div>
                    </div>
                    {this.props.post.PostImage? 
                        this.props.post.PostImage.length > 0?
                        <img style={{width:'100%'}} className="img-fluid" src={API.makeFileURL(this.props.post.PostImage[0].thumbnail,null)} alt="" />

                        :null
                    :null}
                    
                </Link>

                {/* palleha ekata link eka danna une image eka pennanne nathi nisa */}
                <Link to={`/blog/${this.props.post.slug}`}> 
                <div className="portfolio-caption">
                    <h4>{this.props.post.title}</h4>
                    <p className="text-muted">{this.props.post.slug}</p>
                </div>
                </Link>
                
            </div>
        )
    }
}

export default BlogItem;