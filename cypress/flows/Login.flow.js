import LoginPage from '../pages/Login.page.js';

class LoginFlow {

  executeLogin(user) {
    LoginPage.openLogin();
    LoginPage.login(user.username, user.password);
  }

}

export default LoginFlow;  
