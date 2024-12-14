import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefresh from "../hooks/useRefresh";
import useAuth from "../hooks/useAuth";
import Loader from "./Loader";

function PersistentLogin() {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefresh();
  const { auth, persist } = useAuth();

  useEffect(() => {
    let isMounted = true;
    const verifyRefresh = async () => {
      try {
        await refresh();
      } catch (error) {
        console.log(error);
      } finally {
        isMounted && setIsLoading(false);
      }
    };
    !auth?.access && persist ? verifyRefresh() : setIsLoading(false);

    return () => (isMounted = false);
  }, []);

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);
  return <> {!persist ? <Outlet /> : isLoading ? <Loader /> : <Outlet />}</>;
}

export default PersistentLogin;
