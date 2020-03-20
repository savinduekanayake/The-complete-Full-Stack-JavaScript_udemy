import React, { Component } from 'react';

class Feild extends Component {
    render() {
        return (
            <div className="form-group">
                {this.props.elementName === 'input' ?
                <input className="form-control"
                    id={this.props.id}
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    required="required"
                    data-validation-required-message="Please enter your name."
                    name={this.props.name}
                    onChange={this.props.onChange}
                    onBlur={this.props.onBlur}
                />
                :
                <textarea className="form-control"
                    id={this.props.id}
                    placeholder={this.props.placeholder}
                    required="required"
                    data-validation-required-message="Please enter a message."
                    name={this.props.name}
                    onChange={this.props.onChange}
                    onBlur={this.props.onBlur}
                />
                }
                
                <p className="help-block text-danger">
                    {(this.props.touched && this.props.errors) &&
                        <span>This field is required!</span>
                    }
                </p>
            </div>
        )
    }
}

export default Feild;