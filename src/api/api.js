import * as axios from "axios";
import {
  BASE_API_URL,
  FOLLOW_PATH,
  IS_ME_AUTH_PATH,
  LOGIN_PATH,
  PROFILE_PATH,
  STATUS_PATH,
  USERS_PATH,
} from "./api-urls";

const instance = axios.create({
  withCredentials: true,
  baseURL: BASE_API_URL,
  headers: {
    "API-KEY": "4ca754d3-0f4a-4a59-b920-1ca5b5b7fde4",
  },
});

export const authApi = {
  async me() {
    const response = await instance.get(IS_ME_AUTH_PATH);

    return response.data;
  },
  async login(email, password) {
    const response = await instance.post(LOGIN_PATH, {
      email,
      password,
    });

    return response.data;
  },
  async logout(){
    const response = await instance.delete(LOGIN_PATH);

    return response.data;
  }
};
export const profileApi = {
  async getProfile(userId) {
    const url = `${PROFILE_PATH}/${userId}`;
    const response = await instance.get(url);

    return response.data;
  },
  async getStatus(userId) {
    const url = `${STATUS_PATH}/${userId}`;
    const response = await instance.get(url);

    return response.data;
  },

  async updateStatus(status) {
    const url = `${STATUS_PATH}`;
    const response = await instance.put(url, {
      status,
    });

    return response.data;
  },
};

export const usersApi = {
  async getUsers(pageSize = 10, pageNumber = 1) {
    const url = `${USERS_PATH}?page=${pageNumber}&count=${pageSize}`;

    const response = await instance.get(url);
    return response.data;
  },
  async followUser(uid) {
    const url = `${FOLLOW_PATH}/${uid}`;

    const response = await instance.post(url);
    return response.data;
  },
  async unfollowUser(uid) {
    const url = `${FOLLOW_PATH}/${uid}`;

    const response = await instance.delete(url);
    return response.data;
  },
};
