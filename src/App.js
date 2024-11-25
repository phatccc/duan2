import React from 'react';


function App() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Đăng Nhập By Fat</h2>
        
        <div className="form-group">
          <label htmlFor="username">Tên đăng nhập</label>
          <input 
            type="text" 
            id="username"
            placeholder="Nhập tên đăng nhập" 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Mật khẩu</label>
          <input 
            type="password" 
            id="password"
            placeholder="Nhập mật khẩu" 
            required 
          />
        </div>

        <div className="form-options">
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Ghi nhớ đăng nhập</label>
          </div>
          <a href="#" className="forgot-password">Quên mật khẩu?</a>
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn-login">
            Đăng nhập
          </button>
          <button type="reset" className="btn-reset">
            Reset 
          </button>
        </div>

        <div className="form-footer">
          <p>Chưa có tài khoản? <a href="#">Đăng ký ngay</a></p>
        </div>
      </form>
    </div>
  );
}
export default App;
