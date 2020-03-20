import React, { Component } from 'react';
import Field from '../Common/Feild';
import {withFormik} from 'formik';


const fields = {
    sections: [
        [
            { name: 'name', elementName: 'input', type: 'text', id: 'name', placeholder: 'Your name' },
            { name: 'email', elementName: 'input', type: 'email', id: 'email', placeholder: 'Your email' },
            { name: 'phone', elementName: 'input', type: 'text', id: 'phone', placeholder: 'Your phone number' },
        ],
        [
            { name: 'message', elementName: 'textarea', type: 'text', id: 'message', placeholder: 'Type your Message' },

        ]
    ]
}




class Contact extends Component {

    render() {
        return (
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Contact Us</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <form  name="sentMessage" novalidate="novalidate" onSubmit={this.props.handleSubmit}>
                                <div className="row">


                                    {fields.sections.map((section, index) => {
                                        return (
                                            <div className="col-md-6" key={index}>
                                                {section.map((field, i) => {
                                                    return <Field
                                                        {...field}
                                                        key={i}
                                                        value={this.props.values[field.name]}
                                                        name={field.name}
                                                        onChange={this.props.handleChange} //handleChange is a formic fuction
                                                        onBlur={this.props.handleBlur} // for this make touched = true
                                                        touched = {(this.props.touched[field.name])} 
                                                        errors={this.props.errors[field.name]}
                                                        
                                                    />
                                                })}
                                            </div>
                                        )
                                    })}

                                    <div className="clearfix"></div>
                                    <div className="col-lg-12 text-center">
                                        <div id="success"></div>
                                        <button 
                                        // id="sendMessageButton" 
                                        className="btn btn-primary btn-xl text-uppercase" 
                                        type="submit"
                                        // onClick={e => this.submitForm(e)}
                                        >Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

export default withFormik({
    mapPropsToValues: ()=> ({
        name: '',
        email:'',
        phone: '',
        message:''
    }),
    validate: values => {
        const errors = {};
        
        Object.keys(values).map(v=>{
            if(!values[v]){
                errors[v] = "Requrired";
            }
        })

        return errors;
    },
    handleSubmit: (values, {setSubmitting}) =>{
        console.log("VALUES",values)
        alert('You submited!', JSON.stringify(values))
    }
})(Contact);