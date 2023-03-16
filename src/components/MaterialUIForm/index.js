import React, { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import { Button, Box, Typography, TextField, Divider } from '@mui/material';
import { materialUIForm } from "./MaterialUIForm.style";

export const MaterialUIForm = () => {
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
        setSuccess(!success);console.log("hello");
    }

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            minHeight="100vh"
        >
            <Box>
                <Typography variant="h3" className="login-container__title">User login</Typography>
            </Box>
            <Box>
                {
                    success ? (
                        <Box>
                            <Typography variant="h2">Welcome back, {auth.username.toUpperCase()}.</Typography>
                            <Divider/>
                            <Typography variant="h3">I hope you are doing well and are safe.</Typography>
                        </Box>
                    ) : (
                        <Box className="login-form-wrapper">
                            <form onSubmit={handleSubmit}>
                                <Box
                                    sx={{
                                        ...materialUIForm.loginForm
                                    }}>
                                    <Box ref={errRef} arial-live="assertive" className="login-form__err-msg">
                                        {errMsg}
                                    </Box>

                                    <TextField
                                        type="text"
                                        id="username"
                                        ref={userRef}
                                        autoComplete="off"
                                        onChange={(e) => setUsername(e.target.value)}
                                        value={username}
                                        required
                                        placeholder="Username"
                                        className="login-form__input"
                                        sx={{
                                            mb: 2
                                        }}
                                    />
                                
                                    <TextField 
                                        type="password"
                                        id="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                        required
                                        placeholder="Password"
                                        className="login-form__input"
                                        sx={{
                                            mb: 2
                                        }}
                                    />

                                    <Button 
                                        type="submit" 
                                        variant="contained" 
                                        color="primary"
                                        sx={{
                                            py: 2
                                        }}
                                    >
                                        Login
                                    </Button>
                                </Box>
                            </form>
                            <Box>Don't have an account? Register <a href="#">here</a></Box>
                        </Box>
                    )  
                }   
            </Box>
        </Box>
    )
}

