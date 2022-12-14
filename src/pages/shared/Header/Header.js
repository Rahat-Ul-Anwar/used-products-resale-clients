import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
// import logo from '../../../assets/logo.svg'

const Header = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => { 
  logOut()
    .then(() => { })
    .catch(error => console.log(error));
}


    const menuItem = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
      <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
 
      
      {user?.email ?
        <>
        
          <li className='font-semibold'><Link to='/dashboard' >Dashboard</Link></li>
          <li className='font-semibold'><Link onClick={handleLogOut}>Log Out</Link></li>
        
        </>
        :
        <li className='font-semibold'><Link to='/login'>Log In</Link></li>}
      
    </>

    
    return (
        <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
             {menuItem}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">
                    
            <h3>Juan O' Clock</h3>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
            
          </ul>
        </div>
        <div className="navbar-end ">
          <button className="btn btn-secondary hidden lg:block  ">
            <Link to='/register'>Sign Up</Link>
        </button>
        </div>
        <label
             tabIndex={2}
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
        >
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
           
          </label>
      </div>
    );
};

export default Header;