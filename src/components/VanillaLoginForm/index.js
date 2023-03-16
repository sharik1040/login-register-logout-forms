import React, { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthProvider";

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
        <>
            {
                success ? (
                    <section>
                        <h2>Welcome back, {auth.username.toUpperCase()}.</h2>
                        <br/>
                        <h3>I hope you are doing well and are safe.</h3>
                    </section>
                ) : (
                    <section>
                        <form onSubmit={handleSubmit}>
                            <p ref={errRef} arial-live="assertive">
                                {errMsg}
                            </p>

                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                required
                            />
                            
                            <label htmlFor="password">Password:</label>
                            <input 
                                type="password"
                                id="password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required
                            />

                            <button>Login</button>
                        </form>
                        <p>Don't have an account? Register <a href="#">here</a></p>
                    </section>
                )
            }   
        </>
    )
}

