import React, { Component } from 'react';
import Field from '../Common/Feild';

//form submit
import {withFormik} from 'formik';
//validate
import * as Yup from 'yup';

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
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, 'Name must 3 characters long ').required('You must give us your name.'),
        email: Yup.string().email('you need to give us valid email.').required('We need your email'),
        phone: Yup.string()
            .min(10,'Please provide 10 digit phone number')
            .max(15,'Please enter valid phone number')
            .required('We need a phone number to rech you up.'),
        message: Yup.string()
            .min(20,'you should us provide more information details.')
            .required('Message is required.')
    }),

    handleSubmit: (values, {setSubmitting}) =>{
        console.log("VALUES",values)
        alert('You submited!', JSON.stringify(values))
    }
})(Contact);