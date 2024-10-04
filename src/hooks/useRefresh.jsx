import axios from "../api/axios";
import useAuth from "./useAuth";

export default function useRefresh() {
  const { setAuth } = useAuth();
  const refresh = async () => {
    const response = await axios.post("/refresh/token/", null, {
      withCredentials: true,
    });
    console.log(response);
    setAuth((prev) => {
      return {
        ...prev,
        roles: response?.data?.roles || [response?.data?.user_info?.user_type],
        access: response?.data?.access,
        user: `${response?.data?.user_info?.first_name} ${response?.data?.user_info?.middle_name}`,
      };
    });

    return response.data.access;
  };

  return refresh;
}
