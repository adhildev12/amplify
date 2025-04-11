const predefinedUser = {
    username: "testuser",
    password: "password123",
  };
  
  export const login = (username, password) => {
    if (username === predefinedUser.username && password === predefinedUser.password) {
      localStorage.setItem("authenticated", "true");
      return true;
    }
    throw new Error("Invalid username or password");
  };
  
  export const logout = () => {
    localStorage.removeItem("authenticated");
  };
  
  export const isAuthenticated = () => {
    return localStorage.getItem("authenticated") === "true";
  };