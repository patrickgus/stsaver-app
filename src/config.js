export default {
  API_BASE_URL:
    process.env.REACT_APP_API_BASE_URL ||
    "http://localhost:8000/api",
  TOKEN_KEY: "stsaver-client-auth-token"
};
