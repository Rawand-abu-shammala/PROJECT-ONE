import { Link } from 'react-router-dom';

import { PATHS } from '../../router/paths';
import { RoleContext } from '../../App';

import { ROLES } from '../../constants';


import { useAuthContext } from '../../contexts/AuthContext';

const HomePage = () => {

  return (
    <div>
      <h1>Welcome in game</h1>

    </div>
  );
};

export default HomePage;



// import { PATHS } from '../../router/paths';
// import { RoleContext } from '../../App';
// import { ROLES } from '../../constants';
// import { useAuthContext } from '../../contexts/AuthContext';

// import React from 'react';

// const HomePage = () => {
//   return (
//     <div>
//       <h1>Welcome to the Home Page</h1>
//     </div>
//   );
// };

// export default HomePage;

