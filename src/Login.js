import { useState } from 'react';
import { initializeApp } from 'firebase/app';
// import { app } from './firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import './css/login.css'

const Login = () => {
  const navigate = useNavigate();
  // const app = initializeApp(app);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();
  const { myReducer } = useStateValue();
  const [, dispatch ] = myReducer;

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then( auth => {
      if(auth){
        dispatch({
          type:'SIGN_IN',
          payload:auth
        })
        navigate('/');
      }
    })
    .catch( error => alert(error.message));
  }

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then( auth => {
      if(auth){
        navigate('/');
      }
    })
    .catch( error => alert(error.message));
  }
  return (
    <>
    <div className='logo'>
    <img src="https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-HD.png" alt="" />
</div>
    <div className='login'>
        
        <form className='container'>
            <h1>Sign-In</h1>
            <label>
                Email <br/>
                <input className='emailinput' type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </label>
            <br/>
            <label>
                password <br/>
                <input className='passwordinput' type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </label>
            <br/>
            <button onClick={signIn}>Login</button>
            <hr/>
            <h1>Don't have account</h1>
            <br/>
            <button onClick={register}>Sign Up</button>
        </form>
   
    </div>
    </>
  )
  }


export default Login