import { useEffect, useState } from "react";

const SERVER_URL = 'http://localhost:8090/';

export default function useFetch(method) {

   const [data, setData] = useState([]);

   useEffect(() => {
      fetch(SERVER_URL + method)
         .then(res => {
            return res.json();
         })
         .then(data => {
            setData(data)
         })

   }, [method]);

   return data;

}