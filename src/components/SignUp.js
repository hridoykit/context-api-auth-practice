import React, { useContext } from 'react';
import { ContextAuth } from '../contexts/UserContext';

const SignUp = () => {

    const {user, createUser} = useContext(ContextAuth);
    
    const handleSignUp = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        if(!/(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/.test(password)){
            alert('password should contain atleast one number and one special character');
            return;
        };
        
        createUser(email, password)
            .then(res => {
                const user = res.user;
                e.target.reset();
                console.log(user);
            })
            .catch(err => {
                console.error(err);
            });
    }

    return (
        <div>
            <h2>Sign Up Form</h2>
            <form onSubmit={handleSignUp}>
                <label htmlFor="email">Email : </label>
                <input type="email" name='email' placeholder='your email'/>
                <br />
                <label htmlFor="password">Password : </label>
                <input type="password" name='password' placeholder='your password'/>
                <br />
                <button type='submit' >Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;