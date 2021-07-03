import { useEffect, useState } from "react";

const useFetch = (URL) => {
  const [data, setData] = useState({ data: null, loading: true });

  useEffect(() => {
    setData((state) => ({ data: state.data, loading: true }));
    const options = {
      method: "GET",
    };
    const fetchData = async () => {
      const response = await fetch(URL, options);
      const parsedResponse = await response.text();

      setData({ data: parsedResponse, loading: false });
    };
    // call
    fetchData();
  }, [URL, setData]);

  return data;
};

export default useFetch;
