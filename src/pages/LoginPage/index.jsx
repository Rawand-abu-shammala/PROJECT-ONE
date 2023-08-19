import { Fragment, useState } from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import { LOGIN_INPUTS } from '../../constants/auth';
import { Link } from 'react-router-dom';
import './login.css'


const LoginPage = () => {
  const { login, isLoading } = useAuthContext();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    login(formData);
  };

  const handleChangeInput = ({ target: { value, name } }) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

    // const img = '../../../assets/superscene-34-joystick_trans 1.png'

  return (
    <div className="form">
        <form onSubmit={handleSubmit} className="page" >
        <div className="left-content">
        <h1>Gamers</h1>
        <p>
        I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them.
        </p>
        {/* <img src={img} alt="" /> */}
        {/* <img src="/assets/superscene-34-joystick_trans 1.png" alt="" /> */}


      </div>
      <div className="right-content">
      <h2>Join the game!</h2>
      <p>Go inside the best gamers social network!</p>
      <div className="icon">
  <img src="../../../assets/flat-color-icons_google.svg" alt="google"/>
  <img src="../../../assets/logos_twitter.svg" alt="twitter" />
<img src="../../../assets/cib_linkedin-in.svg" alt="linkedin"/>
<img src="../../../assets/ant-design_github-filled.svg" alt="github" />

  </div>
      {LOGIN_INPUTS.map((input) => (
        <div key={input.id} className="input-field">
          <label htmlFor={input.id}>{input.label}</label>
          <input
            type={input.type}
            id={input.id}
            name={input.id}
            onChange={handleChangeInput}
            value={formData[input.id]}
            required
          />
        </div>
      ))}

      <button type='submit' className="button">{isLoading ? 'loading...' : 'login'}</button>
      
      <p>
          Don't have an account? <Link to="/signup">Sign up here.</Link>
        </p>
      
      </div>
    </form>
    </div>
  );
};

export default LoginPage;
