import React , {Component} from 'react';
import {connect} from 'react-redux';
import * as AdminActions from '../../../store/actions/AdminActions';
import {withStyles} from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';


// form
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import {FormikTextField,FormikSelectField} from 'formik-material-fields';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';




//form submit
import { withFormik, Form } from 'formik';
//validate
import * as Yup from 'yup';


const styles = theme => ({
    container: {
        margin:theme.spacing.unit * 3,
        display: 'flex',
        flexDirection: 'row wrap',
        width: '100%'
    },
    formControl: {
        margin: theme.spacing.unit
    },
    leftSide: {
        flex: 2,
        height: '100%',
        margin: theme.spacing.unit * 1,
        padding: theme.spacing.unit * 3
    },
    rightSide: {
        flex: 1,
        height: '100%',
        margin: theme.spacing.unit * 1,
        padding: theme.spacing.unit * 3
    }
});


class AddPost extends Component {

    componentDidUpdate(props,state){
        if(this.props.match.params.view === 'add' && this.props.admin.posts.filter(p=>p.title === this.props.values.title).length >0){
            const post = this.props.admin.posts.filter(p => p.title === this.props.values.title)[0];
            this.props.history.push('/admin/posts/edit/'+post.id);
        }
    }


    render(){
        const {classes} = this.props;

        return(
            <div >
                
                
                <Form className={classes.container}>
                    <Paper className={classes.leftSide}>
                        <FormikTextField 
                            name="title"
                            label="Title"
                            margin="normal"
                            fullWidth
                            onChange={e => this.props.setFieldValue('slug', e.target.value.toLowerCase().replace(/ /g,'_'))}
                        />

                        <FormikTextField 
                            name="slug"
                            label="Slug"
                            margin="normal"
                        />

                        <FormikTextField 
                            name="content"
                            label="Content"
                            margin="normal"
                            fullWidth
                        />
                    </Paper>
                    <Paper className={classes.rightSide}>
                        <FormikSelectField
                            name="status"
                            label="Status"
                            margin= 'normal'
                            options={[
                                {label: 'Unpunlished', value: false},
                                {label: 'Published', value: true}
                            ]}
                            fullWidth
                        />

                        <Button 
                            varant="contained" 
                            color="secondary"
                            onClick={e => {
                                this.props.handleSubmit();
                            }}
                        ><SaveIcon />Save</Button>

                    </Paper>
                </Form>
                
            </div>
            
        )
    }
}

const mapStateToProps = state => ({
    auth:state.auth,
    admin:state.admin
});

const mapDispatchToProps = dispatch =>({
    addPost: (post,token) =>{
        dispatch(AdminActions.addPost(post,token))
    }
})


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(withFormik({
    mapPropsToValues : () =>({
        title: '',
        slug: '',
        createdAt: '',
        status: false,
        content:''

        }),
        validationSchema: Yup.object().shape({
            title:Yup.string().required('Title is required.'),
            slug:  Yup.string().required(),
            content: Yup.string().required()
        }),
        handleSubmit: (values, {setSubmitting, props}) => {
            console.log('saving..',props.addPost);
            props.addPost(values,props.auth.token);
        }
})(withStyles(styles)(AddPost))));