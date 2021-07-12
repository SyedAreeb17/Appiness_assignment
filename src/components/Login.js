import React, { Component } from 'react';
import { connect } from 'react-redux';
import renderField from './renderField';
import { reduxForm, Field, SubmissionError, reset, FieldArray, formValueSelector } from 'redux-form';
import { Route, Redirect, withRouter } from 'react-router-dom';
import {isAuth} from '../utilities';
class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
            auth:isAuth(),
        };

    
      
      }
      submitForm(values){
        this.props.history.push('/dashboard');
          console.log(values);
          if(values.userName == "hruday@gmail.com" && values.password == "hruday123"){
              var dt = {};
              dt.userName = values.userName;
              dt.password = values.password;
              localStorage.setItem("assignmentUser",dt);               
          }
          else{
            alert('credentials are wrong')
          }
      
      }
      render() {
        const {handleSubmit, pristine, submitting} = this.props;
        const {auth} = this.state;
        if(auth){
            return <Redirect to='/dashboard'/>
        }
        return(
                <div className="container">
                         <form onSubmit={handleSubmit(this.submitForm.bind(this))}>
                    <div className="loginBlock">
                        <div>
                        <Field
                          name="userName"
                          component={renderField}
                          type="text"
                          className="inputDiv"
                          label="User Name"
                          placeholder="Eg. John"
                        />
                      <Field
                          name="password"
                          component={renderField}
                          type="password"
                          className="inputDiv"
                          label="Password"
                          placeholder="Eg. John"
                        />
                        <br/>
                          <button type="submit" disabled={submitting} className="signupbtn">Login{submitting && <i className="fa fa-spinner fa-spin"></i>}</button>
                     </div>
                   
                    </div>
                 
                    </form>
                </div>
        )
      }

}

Login = reduxForm({
    form: 'Login',
    destroyOnUnmount: false,
   
  })(Login)

export default withRouter(Login);