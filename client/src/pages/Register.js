import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {register} from '../store/actions/authActions'



class Register extends React.Component{
    state ={
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        error:{}
    }
    changeHandler = event =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitHandler = event => {
        event.preventDefault()
        let {name,email,password,confirmPassword}= this.state
        this.props.register({name,email,password,confirmPassword})
    }
        render(){
            let{name,email,password,confirmPassword,error}=this.state
            return(
                <div className='row'>
                    <div className="col-md-6 offset-md-3">
                        <h1 className='text-center display-4'>Register Here</h1>
                        <form onSubmit={this.submitHandler}>

                            <div className='form-group'>
                                <label htmlFor='name'>Name: </label>
                                <input 
                                type="text"
                                className='form-control'
                                placeholder="Enter you name"
                                name='name'
                                id='name'
                                value={name}
                                onChange={this.changeHandler}
                                />

                            </div>

                            <div className='form-group'>
                                <label htmlFor='email'>Email: </label>
                                <input 
                                type="email"
                                className='form-control'
                                placeholder="Enter you Email"
                                name='email'
                                id='email'
                                value={email}
                                onChange={this.changeHandler}
                                />

                            </div>

                            <div className='form-group'>
                                <label htmlFor='password'>Password: </label>
                                <input 
                                type="password"
                                className='form-control'
                                placeholder="Enter you Password"
                                name='password'
                                id='password'
                                value={password}
                                onChange={this.changeHandler}
                                />

                            </div>

                            <div className='form-group'>
                                <label htmlFor='confirmPassword'>Confirm Password: </label>
                                <input 
                                type="password"
                                className='form-control'
                                placeholder="Enter you Confirmation Password"
                                name='confirmPassword'
                                id='confirmPassword'
                                value={confirmPassword}
                                onChange={this.changeHandler}
                                />

                            </div>
                            <Link to='/login'>Already  have Account ? Login Here
                            
                            </Link>
                            <button className='btn btn-primary my-3 d-block'>Register</button>
                        </form>
                    </div>

                </div>
            )
        }

}
export default connect(null,{register})(Register)