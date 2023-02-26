import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../assests/style.css";
import { ContextAuth } from "../contexts/UserContext";

const Navbar = () => {
  const { user, exitUser } = useContext(ContextAuth);

  const handleSignOutBtn = () => {
    exitUser()
      .then(() => {
        alert("user signed out");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className='navbar'>
        <h4 className='header-title'>CONTEXT API AUTH</h4>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/signin'>Sign In</Link>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/dashboard'>Dashboard</Link>
            {
                user?.email && <p className='user-info'>{user.email}</p>
            }

            {/* toggle log in n out */}
            {
                user?.email ? <button className='sign-out-btn' onClick={handleSignOutBtn}>Sign Out</button> :
                    <Link to='/signin'>
                        <button className='sign-in-btn'>Sign in</button>
                    </Link>
            }

        </nav>
    </div>
    
  );
};

export default Navbar;
