import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {
    // const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const { signUp } = useUserAuth();
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== passwordConfirm) {
            return setError("Passwords do not match")
        }
        setError("");
        try {
            setError("");
            setMessage("");
            await signUp(email, password);
            setMessage("Password reset email sent");
            navigate("/");
        } catch (error) {
            setError("Failed to reset password");
        }
    };

    return (
        <>
            <div className='container-register'>
                <div className='wrapper-register'>
                    <div className="content-form">
                        <div className="form-wrap">
                            <div className="judul">
                                <h2>Register To Social IDN</h2>
                            </div>
                            <span className="alert">
                                <p>Selamat Datang</p>
                            </span>
                            <form onSubmit={handleSubmit}>
                                {/* <span>
                                    <p>Username</p>
                                    <input type="text" placeholder="Username"></input>
                                </span> */}
                                <span>
                                    <p>Email</p>
                                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"></input>
                                </span>
                                <span>
                                    <p>Password</p>
                                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"></input>
                                </span>
                                <span>
                                    <p>Password Confirm</p>
                                    <input onChange={(e) => setPasswordConfirm(e.target.value)} type="password" placeholder="Password"></input>
                                </span>
                                <button>
                                    <p>Send</p>
                                </button>
                                <p className="text-bottom">
                                    Sudah Punya Akun? <Link className="to-other-page" to="/login">Login</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Signup;