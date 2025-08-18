import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user } = use(AuthContext);
    return (
        <div className='w-11/12 mx-auto flex justify-between items-center text-accent'>
            <div>{ user && user.email }</div>
            <div className='flex gap-4'>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/career"}>Career</NavLink>
            </div>
            <div className="profile flex gap-4">
                <img src={userIcon} alt="" />
                <Link to="/auth/login" className='btn btn-primary px-7'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;