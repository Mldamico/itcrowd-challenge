import { UserToken } from "../interfaces/auth";
import axios from "./axios";

const login = (email: string, password: string) =>
  axios.post<UserToken>("/auth/login", { email, password });

const getCurrentUser = (token: string) =>
  axios.get(
    "/auth/me",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

const register = (email: string, password: string) =>
  axios.post<UserToken>("/auth/register", { email, password });


export { login, register, getCurrentUser };
