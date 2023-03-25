import React, { useEffect, useState } from "react";
import { Product } from "../Interfaces";
import axios from "axios";
import useProductContext from "./useProductContext";

export const useAxios = () => {
  const [response, setResponse] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("false");
  const { setProducts } = useProductContext();

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData(): Promise<void> {
      try {
        const res = await axios.get("https://dummyjson.com/products", {
          signal: controller.signal,
        });
        const data: Product[] = res.data.products;
        setResponse(() => {
          return data;
        });
        setProducts(() => {
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
