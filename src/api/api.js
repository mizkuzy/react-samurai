import * as axios from "axios";
import {
  BASE_API_URL,
  FOLLOW_PATH,
  IS_ME_AUTH_PATH,
  PROFILE_PATH,
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
};
export const profileApi = {
  async getProfile(userId) {
    const url = `${PROFILE_PATH}/${userId}`;
    const response = await instance.get(url);

    return response.data;
  },
};

export const usersApi = {
  getUsers(pageSize = 10, pageNumber = 1) {
    const url = `${USERS_PATH}?page=${pageNumber}&count=${pageSize}`;

    return instance.get(url).then((response) => response.data);
  },
  followUser(uid) {
    const url = `${FOLLOW_PATH}/${uid}`;

    return instance.post(url).then((response) => response.data);
  },
  unfollowUser(uid) {
    const url = `${FOLLOW_PATH}/${uid}`;

    return instance.delete(url).then((response) => response.data);
  },
};
