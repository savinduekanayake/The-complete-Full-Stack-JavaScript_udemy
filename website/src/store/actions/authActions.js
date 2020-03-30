import API from '../../utils/api';

export const login = (email,pass) => {
    return (dispatch) => {

        API.login(email,pass,res =>{ //email,password .then result from this
            console.log('Result',res.data);
            dispatch({
                type: "LOGIN",
                payload: {
                    email:email,
                    token: res.data.id,
                    userId: res.data.userId
                }
            }) 
        })
    }
    
}

export const register = (name,email,pass)=>{
    return dispatch => {
        API.register(name,email,pass, res => {
            if(res.status === 200){
                dispatch(login(email,pass))
            }else{
                if(res){
                    dispatch({
                        type:'SHOW_ERROR',
                        payload: 'There was an error. Do you already have any account?'
                    })
                }
            }
        })
    }
    
    
    // {
    //     type: 'REGISTER',
    //     payload: {email,pass}
    // }
}