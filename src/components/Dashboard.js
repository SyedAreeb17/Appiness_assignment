import React, { Component } from 'react';
import { connect } from 'react-redux';
import renderField from './renderField';
import { reduxForm, Field, SubmissionError, reset, FieldArray, formValueSelector } from 'redux-form';
import { Route, Redirect, withRouter } from 'react-router-dom';
import {isAuth} from '../utilities';
class Dashboard extends Component {

    constructor(props){
        super(props);

        this.state = {
            auth:isAuth(),
            data:[]

            
        };

    
      
      }
      componentDidMount(){
                let data = [
                    {
                        id:1,
                        name:"test1",
                        age:11,
                        gender:"male",
                        email:"test1@gmail.com",
                        phoneNo:"9415346313"

                    },
                    {
                        id:2,
                        name:"test1",
                        age:12,
                        gender:"male",
                        email:"test2@gmail.com",
                        phoneNo:"9415346314"

                    },
                    {
                        id:3,
                        name:"test3",
                        age:13,
                        gender:"male",
                        email:"test3@gmail.com",
                        phoneNo:"9415346315"

                    },
                    {
                        id:4,
                        name:"test4",
                        age:14,
                        gender:"male",
                        email:"test4@gmail.com",
                        phoneNo:"9415346316"

                    },
                    {
                        id:5,
                        name:"test5",
                        age:15,
                        gender:"male",
                        email:"test5@gmail.com",
                        phoneNo:"9415346317"

                    },
                    {
                        id:6,
                        name:"test6",
                        age:16,
                        gender:"male",
                        email:"test6@gmail.com",
                        phoneNo:"9415346318"

                    },

                ];

                this.setState({
                    data:data
                });


      }
     
      render() {
        const {auth} = this.state;
        const {data}= this.state;
        if(!auth){
            return <Redirect to='/'/>
        }
        return(
                <>
                <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>email</th>
                <th>phone Number</th>
            </tr>
           
                {data && data.length>0 && data.map(obj=>{
                    return(
                        <>
                         <tr>
                        <td> {obj.id}</td>
                        <td>{obj.name}</td>
                        <td>{obj.age}</td>
                        <td>{obj.gender}</td>
                        <td>{obj.email}</td>
                        <td>{obj.phoneNo}</td>
                        </tr>
                        </>
                    )
                })}
            </table>
                </>
        )
      }

}


export default withRouter(Dashboard);