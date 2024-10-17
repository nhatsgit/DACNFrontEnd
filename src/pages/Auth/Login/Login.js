import React, { useState } from 'react';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý đăng nhập tại đây
        if (!email || !password) {
            setError('Vui lòng nhập email và mật khẩu');
        } else {
            setError('');
            console.log('Đăng nhập với email:', email, 'và mật khẩu:', password, 'Nhớ mật khẩu:', rememberMe);
            // Gửi yêu cầu đăng nhập đến API ở đây
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Đăng Nhập</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
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