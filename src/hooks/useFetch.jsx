import { useState, useEffect } from "react";
// import axios from "axios";
import { loadingAwait } from "../utils";
export default function useFetch(url, resDelay, rejDelay) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const onLoad = async () => {
    console.log(url, resDelay, rejDelay)
    try {
      setIsLoading(true);
      setError(null);
      // const response = await axios.get(url, { ...options, cancelToken: source.token, })
      // setData(response.data)
      const data = await loadingAwait(resDelay, rejDelay);
      console.log(data);
      setIsLoading(false);
    } catch (err) {
      // if(!axios.isCancel(err)) {setError(err.message)}
      setError("Load Again");
      console.log(err);
    }
  };

  useEffect(() => {
    // const source = axios.CancelToken.source()
    onLoad();
    return () => {
      // source.cancel('Request Cancelled by the user.')
    };
  }, [url]);

  return { error, isLoading, retry: onLoad };
}
