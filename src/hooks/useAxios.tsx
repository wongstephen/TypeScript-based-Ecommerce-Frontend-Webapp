import React, { useEffect, useState } from "react";
import { Product } from "../Interfaces";
import axios from "axios";

export const useAxios = () => {
  const [response, setResponse] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("false");

  const [num, setNum] = useState(1);
  useEffect(() => {
    console.log(num), [num];
  });

  useEffect(() => console.log(response), [response]);
  useEffect(() => {
    const controller = new AbortController();
    async function fetchData(): Promise<void> {
      try {
        setNum((prev) => prev++);
        const res = await axios.get("https://dummyjson.com/products", {
          signal: controller.signal,
        });
        const data: Product[] = res.data.products;
        // console.log(res.status);
        setResponse(() => {
          return data;
        });
        return controller.abort();
      } catch (err) {
        setError(err.message);
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { response, loading, error };
};
