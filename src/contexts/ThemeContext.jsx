// const { createContext, useContext, useState, useEffect } = require('react');
// const { THEMES } = require('../constants');

// export const ThemeContext = createContext(null);

// export const useThemeContext = () => useContext(ThemeContext);

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState(
//     () => localStorage.getItem('theme') || THEMES.LIGHT
//   );

//   const toggleTheme = () => {
//     setTheme((prevState) =>
//       prevState === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK
//     );



// import React, { createContext, useContext, useState } from 'react';
// import { ThemeProvider } from '../contexts/ThemeContext';

// الشيفرة الإضافية هنا

// const { createContext, useContext, useState, useEffect } = require('react');
// const { THEMES } = require('../constants');

// export const ThemeContext = createContext(null);



// const ThemeContext = createContext(null);

// export const useThemeContext = () => useContext(ThemeContext);

// const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState('light'); // You can set 'dark' as the initial theme if needed

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export default ThemeProvider;






// import React, { createContext, useContext, useState } from 'react';

// const ThemeContext = createContext(null);

// export const useThemeContext = () => useContext(ThemeContext);

// const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState('light'); // You can set 'dark' as the initial theme if needed

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export default ThemeProvider;






// import React, { createContext, useContext, useState } from 'react';

// const ThemeContext = createContext(null);

// export const useThemeContext = () => useContext(ThemeContext);

// const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState('light'); // You can set 'dark' as the initial theme if needed

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export default ThemeProvider;







    // setTheme((prevState) => {
    //   const currentTheme =
    //     prevState === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
    //   localStorage.setItem('theme', currentTheme);
    //   return currentTheme;
    // });
//   };

//   useEffect(() => {
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };





const { createContext, useContext, useState, useEffect } = require('react');
const { THEMES } = require('../constants');

export const ThemeContext = createContext(null);

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || THEMES.LIGHT
  );

  const toggleTheme = () => {
    setTheme((prevState) =>
      prevState === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK
    );

    setTheme((prevState) => {
      const currentTheme =
        prevState === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
      localStorage.setItem('theme', currentTheme);
      return currentTheme;
    });
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
