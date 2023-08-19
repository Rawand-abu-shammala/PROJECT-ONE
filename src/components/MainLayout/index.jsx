import React from 'react';
import Header from '../Header/index';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
