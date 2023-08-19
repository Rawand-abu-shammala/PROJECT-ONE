// import { Fragment, useState } from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import { SIGNUP_INPUTS } from '../../constants/auth';
// import { Link } from 'react-router-dom';
import { PATHS } from '../../router/paths';

// const SignUpPage = () => {
//   const { signup, isLoading } = useAuthContext();
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     rePassword: '',
//   });

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (formData.password === formData.rePassword)
//       signup({
//         name: formData.username,
//         email: formData.email,
//         password: formData.password,
//       });
//     else {
//       alert('Password and Repeat Password are not the same');
//     }
//   };

//   const handleChangeInput = ({ target: { value, name } }) =>
//     setFormData((prev) => ({ ...prev, [name]: value }));

//   return (
//     <form onSubmit={handleSubmit}>
//       {SIGNUP_INPUTS.map((input) => (
//         <Fragment key={input.id}>
//           <label htmlFor={input.id}>{input.label}</label>
//           <input
//             type={input.type}
//             id={input.id}
//             name={input.id}
//             onChange={handleChangeInput}
//             value={formData[input.id]}
//             required
//           />
//         </Fragment>
//       ))}
//       <p>
//         Already have an account? 
//         <Link to={PATHS.LOGIN}>Login here.</Link>
//       </p>
//       <button type='submit'>{isLoading ? 'loading...' : 'Sign Up'}</button>
//     </form>
//   );
// };

// export default SignUpPage;



import React, { useState } from 'react';
// import { useAuthContext } from './contexts/AuthContext';
// import { SIGNUP_INPUTS } from './constants/auth';
import { Link, useNavigate } from 'react-router-dom';
// import { PATHS } from './paths';

const SignUpPage = () => {
  const { signup, isLoading } = useAuthContext();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    signup(formData);
  };

  const handleChangeInput = ({ target: { value, name } }) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

    const [agreed, setAgreed] = useState(false);




  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="page">
      <div className="left-content">
      <Link to={PATHS.LOGIN}>
        {/* <img src="../../../public/assets/" alt="" /> */}
        Back
      </Link>
      </div>
      <div className="right-content">
      {SIGNUP_INPUTS.map((input) => (
        <div key={input.id}>
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
        <div className="checkbox">
        <input type="checkbox" checked={agreed} onChange={() => setAgreed(!agreed)} />
        <label>I agree to the terms and conditions</label>
      </div>
      <button type='submit' className="button">{isLoading ? 'loading...' : 'sign up'}</button>
      <p>
        Already have an account? <Link to={PATHS.LOGIN}>Login here.</Link>
      </p>
      </div>
    </form>
    </div>
  );
};

export default SignUpPage;
