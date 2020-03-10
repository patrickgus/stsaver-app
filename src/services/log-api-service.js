import TokenService from "./token-service";
import config from "../config";

const LogApiService = {
  getLogs(userId) {
    return fetch(`${config.API_BASE_URL}/logs/${userId}`, {
      headers: { authorization: `bearer ${TokenService.getAuthToken()}` }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  getTotalHours(userId) {
    return fetch(`${config.API_BASE_URL}/logs/${userId}/hours`, {
      headers: { authorization: `bearer ${TokenService.getAuthToken()}` }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  postLog(userId, start_time, end_time, media, breaks) {
    const logEntry = { start_time, end_time, media, breaks };
    return fetch(`${config.API_BASE_URL}/logs/${userId}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(logEntry)
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  deleteLog(userId, logId) {
    return fetch(`${config.API_BASE_URL}/logs/${userId}/${logId}`, {
      method: "DELETE",
      headers: { authorization: `bearer ${TokenService.getAuthToken()}` }
    }).then(res => (!res.ok ? e => Promise.reject(e) : res.ok));
  },

  updateLog(userId, logId, start_time, end_time, media, breaks) {
    const logEntry = { start_time, end_time, media, breaks };
    return fetch(`${config.API_BASE_URL}/logs/${userId}/${logId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(logEntry)
    }).then(res => (!res.ok ? e => Promise.reject(e) : res.ok));
  }
};

export default LogApiService;
