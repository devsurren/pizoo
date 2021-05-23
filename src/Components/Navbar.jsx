import { Link } from "react-router-dom"

import { useAuth } from "../Context/AuthContext"
import { firebaseAuth } from "../config/config"

export const Navbar=()=>{

    const { user }=useAuth();

       const loggingOut=()=>{
           firebaseAuth.signOut().then(()=>{
               localStorage.removeItem('user');
               localStorage.removeItem('userName');
               localStorage.removeItem('currentUser');
               console.log('signoutSuccess');
           }).catch((err)=>{
               console.log(err.message);
           });
       } 

    return(
      <>
          <nav className='navbar'>
                <div className='logo-group' >
                    <i class="fas fa-camera-retro fa-2x"></i>
                    <h2 className='logo-lead'>pizoo</h2>
                </div>
                <div className='link-group'>
                 {localStorage.getItem('user')||user ? (
                     <span>
                            <span style={{fontWeight:'bold'}}>Hi,{localStorage.getItem('currentUser')?localStorage.getItem('userName'):'User'} </span>
                          <Link className='remove-underline logout' to='/' onClick={loggingOut}>Logout</Link>
                     </span>
                 ):(<ul className='navbar-ul'>
                       <li className="navbar-list">
                            <Link className='remove-underline' to='/'>Home</Link>
                        </li>
                        <li  className="navbar-list">
                            <Link className='remove-underline' to='/signup'>SignUp</Link>
                        </li>
                        <li className="navbar-list">
                            <Link className='remove-underline'  to='/login'>Login</Link>
                        </li>
                    </ul>)}
                </div>
          </nav>
      </>
    )
}