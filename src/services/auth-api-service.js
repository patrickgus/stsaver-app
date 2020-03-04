import config from "../config";
import TokenService from "./token-service";
import IdleService from "./idle-service";

const AuthApiService = {
  postUser(user) {
    return fetch(`${config.API_BASE_URL}/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  postLogin(credentials) {
    return fetch(`${config.API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      )
      .then(res => {
        TokenService.saveAuthToken(res.authToken);
        IdleService.regiserIdleTimerResets();
        TokenService.queueCallbackBeforeExpiry(() => {
          AuthApiService.postRefreshToken();
        });
        return res;
      });
  },
  postRefreshToken() {
    return fetch(`${config.API_BASE_URL}/auth/refresh`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      )
      .then(res => {
        TokenService.saveAuthToken(res.authToken);
        TokenService.queueCallbackBeforeExpiry(() => {
          AuthApiService.postRefreshToken();
        });
        return res;
      })
      .catch(err => {
        console.error(err);
      });
  }
};

export default AuthApiService;
