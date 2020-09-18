class Auth {
  constructor() {
    this.isLogin = false;
  }

  onLogin(cb) {
    this.isLogin = true;
    cb();
  }

  onLogout(cb) {
    cb();
    this.isLogin = false;
    localStorage.clear();
  }

}

export default new Auth();