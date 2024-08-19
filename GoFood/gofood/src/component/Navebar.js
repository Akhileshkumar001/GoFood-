// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Navebar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-success">
//   <div className="container-fluid">
//     <Link className="navbar-brand" to="/">GoFood</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//         </li>

//         <li className="nav-item">
//           <Link className="nav-link Login" to="/login" tabindex="-1" aria-disabled="true">Login</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link SignUp" to="/signUp" tabindex="-1" aria-disabled="true">SignUp</Link>
//         </li>
//       </ul>
//       <form className="d-flex">

//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
//   )
// }
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navebar.css'; 

// export default function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-success">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">GoFood</Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//             </li>
//           </ul>
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link Login" to="/login" tabIndex="-1" aria-disabled="true">Login</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link SignUp" to="/signUp" tabIndex="-1" aria-disabled="true">SignUp</Link>
//             </li>
//           </ul>
//           <form className="d-flex ms-3">
//             <button className="btn btn-outline-light" type="submit" >Search</button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// }

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Navebar.css';

export default function Navbar() {
  const navigate=useNavigate();
  const handleLogOut=()=>{
    localStorage.removeItem("token")
    navigate('/login')
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">GoFood</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            
            {(localStorage.getItem('token')) ?
              
                <Link className="nav-link active" aria-current="page" to="/Order">My Order</Link>
              
              : ""}
          </ul>
          {(!localStorage.getItem('token'))?
            <div className='d-flex'>
            <Link className="nav-link Login" to="/login" tabIndex="-1" aria-disabled="true">Login</Link>
            <Link className="nav-link SignUp" to="/signUp" tabIndex="-1" aria-disabled="true">SignUp</Link>
          </div>
          :
          <div style={{}}>
          
          <Link className="btn bg-white text-success max-2" to="/Cart">my Cart</Link>
          <Link className="btn bg-white text-success max-2" to="/Search">Search</Link>
          <div className="btn bg-white   text-danger max-2" onClick={handleLogOut}>Log Out</div>
          </div> 
          }
          


          {/* <form className="d-flex ms-3">
            <button className="btn btn-outline-light" type="submit" >Search</button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}


