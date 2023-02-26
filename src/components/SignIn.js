import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assests/style.css';
import { ContextAuth } from '../contexts/UserContext';

const SignIn = () => {

    const {signIn, signInWithGoogle} = useContext(ContextAuth);
    const navigate = useNavigate();

    const handleSignIn = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const pass = e.target.password.value;

        //login
        signIn(email, pass)
            .then(res => {
                const user = res.user;
                e.target.reset();
                navigate('/');

            })
            .then(err => {
                console.error(err);
            });

        //login with google
        // signInWithGoogle()
        //     .then(res =>{
        //         const user = res.user;
        //     })
        //     .then(err =>{
        //         console.error(err);
        //     });
    }

    return (
        <div>
            <h2>Sign In Form</h2>
            <form action="" onSubmit={handleSignIn} >
                <label htmlFor="email">Email : </label>
                <input type="email" name='email' placeholder='your email'/>
                <br />
                <label htmlFor="password">Password : </label>
                <input type="password" name='password' placeholder='your password'/>
                <br />
                <button className='sign-in-btn' type='submit' >Sign In</button>
                {/* <button className='google-sign-in-btn'type='submit'><AiFillGoogleCircle /></button> */}
                <br />
                {/* <button onClick={signInWithGoogle} className='google-sign-in-btn'type='submit'>google</button> */}
            </form>
        </div>
    );
};

export default SignIn;