import { api } from "../api/axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import useRefresh from "./useRefresh";

export default function useApiPrivate() {
  const refresh = useRefresh();
  const { auth } = useAuth();
  useEffect(() => {
    const requestInterceptors = api.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth?.access}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptors = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccess = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccess}`;
          return api(prevRequest);
        }
        return Promise.reject(error);
      }
    );
    return () => {
      api.interceptors.response.eject(responseInterceptors);
      api.interceptors.request.eject(requestInterceptors);
    };
  }, [auth, refresh]);
  return api;
}
