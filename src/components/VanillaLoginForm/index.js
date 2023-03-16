import React, { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import "./VanillaLoginForm.css";

export const LoginForm = () => {
    const {auth, setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg("");
    }, [username, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!errMsg) setAuth({username, password});
        setUsername("");
        setPassword("");
        setSuccess(!success);
    }

    return (
        <div className="login-container">
            <h2 className="login-container__title">User login</h2>
            {
                success ? (
                    <section>
                        <h2>Welcome back, {auth.username.toUpperCase()}.</h2>
                        <br/>
                        <h3>I hope you are doing well and are safe.</h3>
                    </section>
                ) : (
                    <section className="login-form-wrapper">
                        <form onSubmit={handleSubmit} className="login-form">
                            <p ref={errRef} arial-live="assertive" className="login-form__err-msg">
                                {errMsg}
                            </p>

                            <input
                                type="text"
                                id="username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                required
                                placeholder="Username"
                                className="login-form__input"
                            />
                            
                            <input 
                                type="password"
                                id="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required
                                placeholder="Password"
                                className="login-form__input"
                            />

                            <button className="login-form__button">Login</button>
                        </form>
                        <p>Don't have an account? Register <a href="#">here</a></p>
                    </section>
                )
            }   
        </div>
    )
}

