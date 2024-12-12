import React, { useContext, useEffect, useState } from 'react';
import { notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import * as AuthService from '../../apiServices/AuthService';
import { AuthContext } from '../../component/Context/AuthContext';

function Login() {
    const [userName, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const { auth, setAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (auth.isAuthenticated) {
            navigate('/')
        }
    }, []);
    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        if (!userName || !password) {
            notification.error({
                message: "Vui lòng nhập đúng thông tin!"
            })
        } else {
            const res = await AuthService.LoginRequest(userName, password)

            if (res) {

                localStorage.setItem('ACCESS_TOKEN', res);
                localStorage.setItem('USER', userName);
                notification.success({
                    message: "Đăng nhập thành công ", description: "Xin chào " + userName
                })
                setAuth({
                    isAuthenticated: true,
                    user: {
                        username: userName
                    }
                })
                const redirectUrl = sessionStorage.getItem('redirectAfterLogin') || '/';
                sessionStorage.removeItem('redirectAfterLogin');
                navigate(redirectUrl);
                //window.location.href = redirectUrl;
            } else {
                notification.error({
                    message: "Đăng nhập không thành công", description: "Tài khoản hoặc mật khẩu không chính xác"
                })
            }
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Đăng Nhập</h2>
            <form onSubmit={handleSubmitLogin}>
                <div>
                    <label>Email:</label>
                    <input
                        value={userName}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px', margin: '8px 0' }}
                    />
                </div>
                <div>
                    <label>Mật khẩu:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px', margin: '8px 0' }}
                    />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        style={{ marginRight: '8px' }}
                    />
                    <label>Nhớ mật khẩu</label>
                </div>
                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', marginTop: '10px' }}>
                    Đăng Nhập
                </button>
            </form>
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <p>Bạn chưa có tài khoản? <a href="/register">Đăng ký tại đây</a></p>
            </div>
        </div>
    );
}

export default Login;