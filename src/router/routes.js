import { Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';

import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import AdminPage from '../pages/AdminPage'

import ProfilePage from '../pages/ProfilePage'

import { H1 } from '../components/Typography';

import { PATHS } from './paths';
import AdminGuard from '../components/Guards/AdminGuard';
import GuestGuard from '../components/Guards/GuestGuard';
import UserGuard from '../components/Guards/UserGuard';

const adminPages = [
  {
    path: PATHS.ADMIN.ROOT,
    element: 
    <AdminGuard >
    <AdminPage/>
    </AdminGuard>,
  
  },
];

const userPages = [
  {

    
      index: true,
      element: (
        <UserGuard>
          <ProfilePage />
        </UserGuard>
      ),


  },
];

const authPages = [
  {
    path: PATHS.LOGIN,
    element: (
      <GuestGuard>
        <LoginPage />
      </GuestGuard>
    ),
  },
  {
    path: PATHS.SIGNUP,
    element: (
      <GuestGuard>
        <SignUpPage />
      </GuestGuard>
    ),
  },
];

const guestPages = [
  {
    index: true,
    element: (
      <GuestGuard>
        <HomePage />
      </GuestGuard>
    ),
  },

  {

  },
  ...authPages,
];

const routes = [
  ...guestPages,
  ...userPages,
  ...adminPages,
 
  {
    path: PATHS.ERRORS.NOT_FOUND,
    element: <H1>Page not found 404</H1>,
  },
  {
    path: '*',
    element: <Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />,
  },
];

export {adminPages,userPages, routes };






