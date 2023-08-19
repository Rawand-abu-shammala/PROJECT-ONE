import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import { PATHS } from '../../router/paths';
import { useAuthContext } from '../../contexts/AuthContext';
import { useThemeContext } from '../../contexts/ThemeContext';
import { ROLES, THEMES} from '../../constants';

const Header = () => {
const { role, user } = useAuthContext();




return (
// className instead of class
<header className='header'>
<h1>Header</h1>

<nav>
{role === ROLES.GUEST ? (
  <ul>
 <li>
      <NavLink to={PATHS.HOME}>
        {({ isActive, isPending }) => (isActive ? <u>Home</u> : 'Home')}
      </NavLink>
    </li>



    <li>
      <NavLink to={PATHS.LOGIN}>
        {({ isActive, isPending }) =>
          isActive ? <u>Login</u> : 'Login'
        }
      </NavLink>
    </li>

    <li>
      <NavLink to={PATHS.SIGNUP}>
        {({ isActive, isPending }) =>
          isActive ? <u>Sign up</u> : 'Sign up'
        }
      </NavLink>
    </li>
  </ul>
) : (
  <ul>
    <li>
      <NavLink to={PATHS.PROFILE}>
        {({ isActive, isPending }) => (isActive ? <u>Profile</u> : 'Home')}
      </NavLink>
    </li>

  
    {/* <li>
      <button onClick={handleLogout}>Logout</button>
    </li>
    <li>
      <button
        onClick={toggleTheme}
        style={
          theme === THEMES.LIGHT
            ? {
                backgroundColor: 'black',
                color: 'white',
              }
            : {
                backgroundColor: 'white',
                color: 'black',
              }
        }
      >
        {theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT}
      </button>
    </li> */}
    <li>
      <h4>Welcome {user?.username}</h4>
    </li>
  </ul>
)}
</nav>
</header>
);
};

export default Header;





// import React from 'react';
// // import { NavLink } from 'react-router-dom';
// import './style.css';
// import { PATHS } from '../../router/paths';
// import { useAuthContext } from '../../contexts/AuthContext';
// import { useThemeContext } from '../../contexts/ThemeContext';
// import { ROLES, THEMES } from '../../constants';
// // import Auth from '../../constants/auth'

// // const Header = () => {
// // const { role, user, logout } = useAuthContext();
// // const { theme, toggleTheme } = useThemeContext();

// // const handleLogout = () => {
// // logout();
// // };

// // return (
// // // className instead of class
// // <header className='header'>
// // <h1>Header</h1>

// // <nav>
// // {role === ROLES.GUEST ? (
// //   <ul>
// //     <li>
// //       <NavLink to={PATHS.LOGIN}>
// //         {({ isActive, isPending }) =>
// //           isActive ? <u>Login</u> : 'Login'
// //         }
// //       </NavLink>
// //     </li>
// //     <li>
// //       <NavLink to={PATHS.SIGNUP}>
// //         {({ isActive, isPending }) =>
// //           isActive ? <u>Sign up</u> : 'Sign up'
// //         }
// //       </NavLink>
// //     </li>
// //   </ul>
// // ) : (
// //   <ul>
// //     <li>
// //       <NavLink to={PATHS.HOME}>
// //         {({ isActive, isPending }) => (isActive ? <u>Home</u> : 'Home')}
// //       </NavLink>
// //     </li>
  

// //     <li>
// //       <button onClick={handleLogout}>Logout</button>
// //     </li>
// //     <li>
// //       <button
// //         onClick={toggleTheme}
// //         style={
// //           theme === THEMES.LIGHT
// //             ? {
// //                 backgroundColor: 'black',
// //                 color: 'white',
// //               }
// //             : {
// //                 backgroundColor: 'white',
// //                 color: 'black',
// //               }
// //         }
// //       >
// //         {theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT}
// //       </button>
// //     </li>
// //     <li>
// //       <h4>Welcome {user?.username}</h4>
// //     </li>
// //   </ul>
// // )}
// // </nav>
// // </header>
// // );
// // };

// // export default Header;



// // import React from 'react';
// import { NavLink, Link } from 'react-router-dom';
// // import { PATHS } from './paths';
// // import { useAuthContext } from './contexts/AuthContext';
// // import { useThemeContext } from './contexts/ThemeContext';

// const Header = () => {
//   const { role, user, logout } = useAuthContext();
//   // const { theme, toggleTheme } = useThemeContext();

//   const handleLogout = () => {
//     logout();
//   };

//   return (
//     <header className='header'>
//       <h1>Header</h1>
//       <nav>
//         {role === 'guest' ? (
//           <ul>
//             <li>
//               <NavLink to={PATHS.LOGIN}>Login</NavLink>
//             </li>
//             <li>
//               <NavLink to={PATHS.SIGNUP}>Sign up</NavLink>
//             </li>
//           </ul>
//         ) : (
//           <ul>
//             <li>
//               <NavLink to={PATHS.HOME}>Home</NavLink>
//             </li>
//             {role === 'admin' && (
//               <li>
//                 <NavLink to={PATHS.ADMIN.ROOT}>Admin</NavLink>
//               </li>
//             )}
//             <li>
//               <button onClick={handleLogout}>Logout</button>
//             </li>
//             <li>
//               {/* <button
//                 onClick={toggleTheme}
//                 style={{
//                   backgroundColor: theme === 'light' ? 'black' : 'white',
//                   color: theme === 'light' ? 'white' : 'black',
//                 }}
//               >
//                 {theme === 'light' ? 'Dark' : 'Light'} Theme
//               </button> */}
//             </li>
//             <li>
//               <h4>Welcome {user?.username}</h4>
//             </li>
//           </ul>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;
