import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import logoMainSvg from "../assets/images/logomain.svg";
import logoMain from "../assets/images/logomain-real.svg";
import google_g from "../assets/images/Google__G__Logo.svg";
import facebook_f from "../assets/images/Facebook_f_Logo.svg";

const Login = () => {
    // const [name , setName] = useState("");
    const [message,setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { logIn, googleSignIn, facebookSignIn } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            setError("");
            setMessage("");
            await logIn(email, password);
            setMessage("Welcome To Social IDN")
            navigate("/");
        } catch(error) {
            setError("Wrong Password or you never signup", (error.message));
        }
    };

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await googleSignIn();
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleFacebookSignIn = async (e) => {
        e.preventDefault();
        try {
            await facebookSignIn();
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <>
            <div className="container-login">
                <div className="wrapper-login">
                    <div className="left">
                        <div className="bg-wrapper">
                            <div className="wrapper-img">
                                <img src={logoMain} />
                            </div>
                            <span className="text-left">

                                <div className="center">
                                    <img src={logoMainSvg}></img>
                                </div>
                                <div className="bottom">
                                    <p>Dukung Kami Agar Lebih Baik</p>
                                    <h2>Privasi adalah yang utama bagi kami</h2>
                                    <h3>Kami Bahkan Tidak Tahu apa Kamu Lakukan</h3>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="right">
                        <div className="top">
                            <div className="wrap-text">
                                <h1>Welcome To Social IDN</h1>
                                <p>
                                    Socialize safely and comfortably, the current trend is here
                                </p>
                            </div>
                        </div>
                        <div className="form-wrap">

                            <div className="judul">
                                <h2>Login To Social IDN</h2>
                            </div>
                            <span className="alert">
                                <p>Selamat Datang</p>
                            </span>
                            <form onSubmit={handleSubmit}>
                                <span>
                                    <p>Email</p>
                                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"></input>
                                </span>
                                <span>
                                    <p>Password</p>
                                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"></input>
                                </span>
                                <button type="Submit">
                                    <p>Masuk</p>
                                </button>
                                <p className="text-bottom">
                                    Belum Punya Akun? <Link className="to-other-page" to="/signup">Register</Link>
                                </p>
                            </form>
                            <div className="more-login-button">
                                <span className="or">
                                    <p></p>
                                    <p>Atau Login Dengan</p>
                                    <p></p>
                                </span>
                                <button onClick={handleGoogleSignIn}>
                                    <img src={google_g}></img>
                                    <span>
                                        <p>Login dengan Google</p>
                                    </span>
                                </button>
                                <button onClick={handleFacebookSignIn}>
                                    <img src={facebook_f}></img>
                                    <span>
                                        <p>Login dengan Google</p>
                                    </span>
                                </button>
                            </div>
                            <div className="more-link">
                                <p>Reset Password? <Link to="/forgot-password">Forgotpassword</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;