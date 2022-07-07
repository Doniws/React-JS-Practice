import React, { useState  } from "react";
import { Link} from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message , setMessage] = useState("");
    const [error, setError] = useState("");
    const { resetPassword } = useUserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            setError("");
            setMessage("");
            await resetPassword(email);
            setMessage("Password reset email sent");
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
                                <h2>Reset To Social IDN</h2>
                            </div>
                            <span className="alert">
                                {error && <p variant="danger">{error}</p>}
                                {message && <p variant="success">{message}</p>}
                            </span>
                            <form onSubmit={handleSubmit}>
                                <span>
                                    <p>Email</p>
                                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email"></input>
                                </span>
                                <button type="Submit">
                                    <p>Send</p>
                                </button>
                                <p className="text-bottom">
                                    Kembali ke? <Link className="to-other-page" to="/login">Login</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ForgotPassword;