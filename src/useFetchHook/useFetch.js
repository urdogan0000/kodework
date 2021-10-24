import {useState, useEffect} from 'react';
import axios from 'axios';

function useFetch() {
  const [data, setdata] = useState([]);
  const [data2, setdata2] = useState({});
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);
  const [footerLoading, setfooterLoading] = useState(false);

  async function fetchDataforPagination(url) {
    try {
      setfooterLoading(true);
      const {data: responseData} = await axios.get(url);
      setdata(data.concat(responseData.results));
    } catch (error) {
      seterror(error);
    } finally {
      setloading(false);
      setfooterLoading(false);
    }
  }
  async function fetchData(url) {
    try {
      setfooterLoading(true);
      const {data} = await axios.get(url);
      setdata2(data);
    } catch (error) {
      seterror(error);
    } finally {
      setloading(false);
      setfooterLoading(false);
    }
  }
  return {error, loading, data,data2, footerLoading, fetchDataforPagination, fetchData};
}

export default useFetch;
