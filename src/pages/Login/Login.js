import React, { useRef, useState } from 'react'
import styles from './Login.module.css'
import {useNavigate} from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hidden, setHidden] = useState(true);
    const message = useRef('')
    let navigate = useNavigate();

    function ValidateEmail(inputText)
    {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(inputText.match(mailformat))
        {
            message.current = ''
            setHidden(false)
            document.formLogin.email.focus();
            return true;
        }
        else
        {
            message.current = 'Invalid email format'
            setHidden(true)
            document.formLogin.email.focus();
            return false;
        }
    }

    const handleChangeEmail = e => {
        setEmail(e.target.value);
        ValidateEmail(email)
    }

    const handleSubmit = ()=>{
        navigate('/home');
    }

  return (
    <div className={styles.container}>
        <div className={styles.formLogin}>
            <h2 className={styles.title}>Welcome back</h2>
            <p className={styles.subTitle}>You only live once, but if you do it right, once is enough.</p>
            <form name="formLogin" className={styles.form} onSubmit={()=>handleSubmit()}>
                <label htmlFor="email">Email : </label>
                <input name="email" type="text" style={{width: "20rem", height:"1.7rem"}} value={email} onChange={(e)=>handleChangeEmail(e)}></input>
                {message.current !== '' ? <p className={styles.message}>{message.current}</p> : null}
                <label htmlFor="password">Password : </label>
                <input name="password" type="password" minLength="5" style={{width: "20rem", height:"1.7rem"}} value={password} onChange={e=>setPassword(e.target.value)}></input>
                <button type="submit" className={styles.btnSignIn} disabled={hidden} style={{backgroundColor: hidden===true ? "#B3B3B3" : "#000"}}>Sign In</button>
            </form>
        </div>
        <div className={styles.bgcFormLogin}>
            <div className={styles.overlay}>
                <h1 className={styles.titleWelcome}>You only live once, but if you do it right, once is enough.</h1>
            </div> 
        </div>
    </div>
  )
}

export default Login