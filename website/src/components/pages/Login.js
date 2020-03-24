import React, {Component} from 'react';
import Field from '../Common/Feild';
import {withFormik} from 'formik';
import * as Yup from 'yup';

const fields = [
    {name: 'email', elementName:'input', type:'email',placeholder:'Your email'},
    {name: 'password', elementName:'input', type:'password',placeholder:'Your password'},
]

class Login extends Component{
    render(){
        return(
            <div className="login-page">
                <div className='container'>
                    <div className="login-form">
                        <div className="row">
                            <h1>Login</h1>
                        </div>
                        <div className="row">
                            <form onSubmit={this.props.handleSubmit}>
                                {fields.map((f,i)=>{
                                    return (
                                        <div className='col-md-12'>
                                            <Field 
                                                key={i}
                                                {...f}
                                                value={this.props.values[f.name]}
                                                onChange={this.props.handleChange}
                                                onBlur={this.props.handleBlur}
                                                touched={(this.props.touched[f.name])}
                                                errors={this.props.errors[f.name]}

                                            />
                                        </div>
                                    )
                                    
                                })}
                                <div className="col-md-12">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default withFormik({
    mapPropsToValues: ()=> ({
        email: '',
        password: ''
    }),
    validationSchema: Yup.object().shape({
        email:Yup.string().email('email is invalid').required('You need to login with email'),
        password: Yup.string().required('You need to enter your password')
    }),
    handleSubmit: (values, {setSubmitting}) => {
        console.log('login attemp',values)
    }
})(Login);