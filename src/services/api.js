const BASE_URL = `${import.meta.env.REACT_APP_API_URL}/api/v1`;
// const BASE_URL="http://localhost:3000/api/v1"

// AUTH ENDPOINTS
export const endpoints = {
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  VERIFY_USER: BASE_URL + "/auth/user/:id/:token",
  PROFILE_UPLOAD: BASE_URL + "/profile/profile",
};
