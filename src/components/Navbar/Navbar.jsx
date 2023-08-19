import React from 'react'
import './Navbar.css'
import { PATHS } from '../../router/paths';
import { useAuthContext } from '../../contexts/AuthContext';
import { useThemeContext } from '../../contexts/ThemeContext';
import { ROLES, THEMES} from '../../constants';

const Navbar = () => {
  
  const data = useAuthContext();

  const { logout } = useAuthContext();
  const { theme, toggleTheme } = useThemeContext();
  const handleLogout = () => {
    logout();
    };
  return (

  <>
    <div className="profile">
    <span className='k'>Welcome back,<br/>{data.role}!</span>
      <img src="../../../assets/Rectangle 1 (1).png" alt="صورة الملف الشخصي" />
    </div>
    <div className="app">
        
      <div className="navbar">
        
      <div className="up">
  <img src="../../../assets/Game-two (游戏).svg" alt="صورة في الأعلى" />
  </div>
 

        {/* ثلاث صور أسفل بعض */}
        <div className="centered-images">
          <img src="../../../assets/Like (喜欢).svg" alt="صورة 1" />



          <button onClick={handleLogout}>
<img src="../../../assets/Setting-two (设置).svg" alt="صورة 2" />

</button>
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


          <img src="../../../assets/Puzzle (拼图).svg" alt="صورة 3" />
        </div>

        {/* صورة أسفل الصفحة */}
        <div className="bottom-images">
        <div className="stacked-images">
        <img src="../../../assets/Moon (月亮).svg" alt="صورة أسفل الصفحة" />

        <img src="../../../assets/Sun-one (太阳1).svg" alt="صورة أسفل الصفحة" />
        </div>
        </div>

        <div className="vertical-line"></div>
      
      </div>
    </div>
  </>

  )
}

export default Navbar



