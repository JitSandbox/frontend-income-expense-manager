const TOKEN_KEY = "dummy_jwt";

const DUMMY_USER = {
  email: "user@test.com",
  password: "123456",
};

export const authService = {
  login(email: string, password: string): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === DUMMY_USER.email && password === DUMMY_USER.password) {
          const fakeJwt = "jwt-token-" + Date.now();
          localStorage.setItem(TOKEN_KEY, fakeJwt);
          resolve(fakeJwt);
        } else {
          reject("Invalid credentials");
        }
      }, 500);
    });
  },

  logout() {
    localStorage.removeItem(TOKEN_KEY);
  },

  isAuthenticated(): boolean {
    return !!localStorage.getItem(TOKEN_KEY);
  },
};
