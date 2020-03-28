import React , {Component} from 'react';
import {connect} from 'react-redux';
import * as AdminActions from '../../../store/actions/AdminActions';
import {withStyles} from '@material-ui/core/styles';

// form
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

//form submit
import { withFormik } from 'formik';
//validate
import * as Yup from 'yup';


const styles = theme => ({

});


class AddPost extends Component {
    render(){
        const {classes} = this.props;

        return(
            <dic className={classes.container}>
                <h1>Add Posts</h1>
            </dic>
            
        )
    }
}

const mapStateToProps = state => ({
    auth:state.auth,
    admin:state.admin
});

const mapDispatchToProps = dispatch =>({

})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withFormik({
    mapPropsToValues : () =>({
        title: '',
        slug: '',
        createdAt: '',
        status: false,

        }),
        validationSchema: Yup.object().shape({

        }),
        handleSubmit: (valuse, {setSubmitting}) => {

        }
})(withStyles(styles)(AddPost)));